timer = setInterval(() => {
    // select all messages
    const items = document.querySelectorAll('.msg-selectable-entity__entity');
    for (let i = 0; i < items.length; i++) {
        items[i].click();
    }
    const archiveButton = document.querySelector('[title="Archive"]');
    console.log({archiveButton});
    archiveButton.click();
},1000)
