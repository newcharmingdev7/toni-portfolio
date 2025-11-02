import React, { useEffect } from "react";
import Head from "next/head";
import * as THREE from "three";
import Script from "next/script";

const HeadComponent = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg-canvas"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 1;

    const starCount = 1500;
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: "#fff",
      size: 0.0025,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
    });

    const positions = new Float32Array(starCount * 3);
    const radius = Math.min(window.innerWidth, window.innerHeight) / 500;

    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    function animate() {
      requestAnimationFrame(animate);
      stars.rotation.x -= 0.0005;
      stars.rotation.y -= 0.0005;
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const newRadius = Math.min(window.innerWidth, window.innerHeight) / 500;
      const newSize = Math.max(0.002, Math.min(0.004, newRadius / 400));
      starMaterial.size = newSize;

      const positions = stars.geometry.attributes.position.array;
      for (let i = 0; i < starCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        positions[i * 3] = newRadius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = newRadius * Math.cos(phi);
      }
      stars.geometry.attributes.position.needsUpdate = true;
    });

    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    const disableDevTools = (event) => {
      if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode === 85)
      ) {
        // Ctrl+U
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", disableDevTools);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableDevTools);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta property="og:image" content="/assets/img/profile-img.jpg" />
        <meta property="og:image:width" content="630" />
        <meta property="og:image:height" content="1200" />
        <meta property="twitter:image" content="/assets/img/profile-img.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="instagram:image"
          content="/assets/img/profile-img.jpg"
        />
        <meta property="telegram:image" content="/assets/img/profile-img.jpg" />
        <meta
          property="pinterest:image"
          content="/assets/img/profile-img.jpg"
        />
        <meta property="linkedin:image" content="/assets/img/profile-img.jpg" />
        <meta property="facebook:image" content="/assets/img/profile-img.jpg" />
        <link rel="icon" href="/assets/img/favicon.png" type="image/x-icon" />
        <title>Toni Stuckey | Software Developer</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script src="assets/vendor/aos/aos.js" strategy="afterInteractive" />
      <Script
        src="assets/vendor/typed.js/typed.umd.js"
        strategy="afterInteractive"
      />
      <Script
        src="assets/vendor/purecounter/purecounter_vanilla.js"
        strategy="afterInteractive"
      />
      <Script
        src="assets/vendor/waypoints/noframework.waypoints.js"
        strategy="afterInteractive"
      />
      <Script
        src="assets/vendor/swiper/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="assets/vendor/glightbox/js/glightbox.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="assets/vendor/isotope-layout/isotope.pkgd.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="afterInteractive"
      />
      <Script src="assets/js/main.js" strategy="afterInteractive" />
      <canvas id="bg-canvas"></canvas>
    </>
  );
};

export default HeadComponent;
