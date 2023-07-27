
function bg() {
   
    document.body.style.background= bg1();
    document.body.style.backgroundSize = "cover";
  }
  function bg1() {
    let images = [
      "url('https://media.giphy.com/media/cJGRxpn526t54iyBCd/giphy.gif')",
      "url('https://media.giphy.com/media/KdvsBU5PTlNDXV58Ft/giphy.gif')",
      "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJjYnJ5aGsxMTltbmJzcWh2ZHc4M3I3em05MWlranhudTl1MjQ1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TElxFaP5cJBZCid3gG/giphy.gif')",
      "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGJodnlndDhuM252Z2NmYXlsd3QxMTR4aXh2cWI5bXpsM3VmdGJkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GrsyvEOS7z63m/giphy.gif')",
      "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGoyZm1iaGYyc3BxMHpydmIydm8yNzhqcHJtZG45czZoNmpvaHg3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l03KzXLrzlRGkwLkhA/giphy.gif')",
      "url('https://media.giphy.com/media/26zzaI4GRWtcVGDi8/giphy.gif')",
      "url('https://media.giphy.com/media/rAKdqZ8nfiaZi/giphy.gif')",
      "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2pvY3A4aHNsNWI2Z2hlbXozYjdqcm1xNHNxcnR4NzNjeWZjdHRmYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPcbISBoXhh5u/giphy-downsized-large.gif')",
      "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDVzcmZ3Y3lrdzd6MDUzcDlkeWl1aGlqeWozeTZwazd4bjB4anJldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/faIED06xwJmnu/giphy.gif')",
      "url('https://s2.pictoa.com/media/galleries/272/275/2722755fd7c4def30df/36868665fd7c4e56cc0d.gif')",
      "url('https://media.giphy.com/media/3o6Yg2TN9E59G9vSxi/giphy.gif')",
      "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3ppNW40MXF0bWdtZXo2MHR1d2FzeWpkeDBwMDIyc2N3ZmdzM3ZjaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9G1lfQf7ibeafXtEqL/giphy.gif')",
    ];
    
    const bg = images[Math.floor(Math.random() * images.length)];
  
    return bg;
  }