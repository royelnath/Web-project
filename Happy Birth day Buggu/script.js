(function () {
    // 1. SET THE TARGET DATE: December 26, 2025
    const targetDate = new Date("Dec 25, 2025 03:36:00").getTime();

    // To prevent the voice from playing multiple times per second
    const played = {};

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update Display
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        // 2. VOICE COUNTDOWN (Trigger when 10 seconds remain)
        // if (distance <= 10000 && distance > 0) {
        //     if (seconds >= 1 && seconds <= 10 && !played[seconds]) {
        //         const voice = document.getElementById("v11");
        //         if (voice) voice.play().catch(e => console.log("Audio needs user interaction first"));
        //         played[seconds] = true;
        //     }
        // }

        // 2. JARVIS VOICE COUNTDOWN
        if (distance <= 11000 && distance > 0) {
            if (seconds >= 1 && seconds <= 11 && !played[seconds]) {

                // This makes the computer speak
                const msg = new SpeechSynthesisUtterance(seconds);

                // To make it sound like Jarvis:
                msg.rate = 1.1;  // Speed
                msg.pitch = 0.8; // Deep voice
                msg.volume = 1;

                window.speechSynthesis.speak("nine"); // Speak the number
                played[seconds] = true;
            }
        }

        // 3. THE REDIRECT (When countdown ends)
        if (distance < 0) {
            clearInterval(timer);
            window.location.href = "main.html";
        }

    }, 1000);
})();