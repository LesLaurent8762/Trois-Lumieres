/* ==========================================
   TROIS LUMIÈRES
   Chapitre II
========================================== */

const sequence = [

    { id:"line1", delay:1000 },

    { id:"line2", delay:3500 },

    { id:"line3", delay:6000 },

    { id:"line4", delay:10000 },

    { id:"line5", delay:12500 },

    { id:"line6", delay:15000 },

    { id:"line7", delay:19000 },

    { id:"line8", delay:22000 },

    { id:"line9", delay:24500 },

    { id:"line10", delay:27000 },

    { id:"echo", delay:33000 },

    { id:"line11", delay:39000 },

    { id:"line12", delay:46000 },

    { id:"signature", delay:52000 }

];


sequence.forEach(item=>{

    setTimeout(()=>{

        document
            .getElementById(item.id)
            .classList
            .add("show");

    },item.delay);

});


/* ==========================================
   Apparition de la troisième étoile
========================================== */

setTimeout(()=>{

    document
        .getElementById("star3")
        .classList
        .add("show");

},18500);
