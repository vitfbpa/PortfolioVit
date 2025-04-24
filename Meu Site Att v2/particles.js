tsParticles.load("tsparticles", {
    background: {
      color: "#000"
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "connect"
        },
        resize: true
      },
      modes: {
        connect: {
          distance: 120,
          radius: 100,
          links: {
            opacity: 0.5
          }
        }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: "bounce",
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 4 }
      }
    },
    detectRetina: true
  });  