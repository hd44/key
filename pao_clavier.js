//  copyright lexilogos.com
function alpha(item) { 
    var input = document.conversion.saisie;
    if (document.selection) { 
        input.focus();
        range = document.selection.createRange() ;
        range.text = item ;
        range.select(); 
    }
    else if (input.selectionStart || input.selectionStart == '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        var cursorPos = startPos;
        var scrollTop = input.scrollTop;
        var baselength = 0;
        input.value = input.value.substring(0, startPos)
        + item
        + input.value.substring(endPos, input.value.length);
        cursorPos += item.length;
        input.focus();
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos;
        input.scrollTop = scrollTop;
    }
    else {
        input.value += item;
        input.focus();
    }
}

function copier () { 
    document.conversion.saisie.focus();
    document.conversion.saisie.select();
    copietxt = document.selection.createRange();
    copietxt.execCommand("Copy");
}

var car; 
function transcrire() {
    car = document.conversion.saisie.value;        
    car = car.replace(/â€™/g, "\'");
    car = car.replace(/[aÃ¢Ã Ä]/g, "Ø§");
    car = car.replace(/Ø§Ø§/g, "Ø¢");  
    car  = car.replace(/b/g, "Ø¨");
    car  = car.replace(/Ø¨'/g, "Ù¾");
    car  = car.replace(/p/g, "Ù¾");
    car  = car.replace(/t/g, "Øª");
    car  = car.replace(/Øª'/g, "Ø«");
    car  = car.replace(/á¹¯/g, "Ø«");
    car  = car.replace(/[jÇ§]/g, "Ø¬");
    car  = car.replace(/Ø¬'/g, "Ú†");
    car  = car.replace(/c/g, "Ú†");
    car  = car.replace(/[Há¸¥á¸¤]/g, "Ø­");
    car  = car.replace(/Ø­'/g, "Ø®");
    car  = car.replace(/[xáº–K]/g, "Ø®");
    car  = car.replace(/d/g, "Ø¯");
    car  = car.replace(/Ø¯'/g, "Ø°");
    car  = car.replace(/á¸/g, "Ø°");
    car  = car.replace(/r/g, "Ø±");
    car  = car.replace(/Ø±'/g, "Ø²");
    car  = car.replace(/z/g, "Ø²");
    car  = car.replace(/s/g, "Ø³");
    car  = car.replace(/Ø³'/g, "Ø´");
    car  = car.replace(/Å¡/g, "Ø´");
    car  = car.replace(/[Sá¹£]/g, "Øµ");
    car  = car.replace(/Øµ'/g, "Ø¶");
    car  = car.replace(/[Dá¸]/g, "Ø¶");
    car  = car.replace(/[Tá¹­]/g, "Ø·");
    car  = car.replace(/Ø·'/g, "Ø¸");
    car  = car.replace(/[Záº“]/g, "Ø¸");
    car  = car.replace(/[gÊ¿]/g, "Ø¹");
    car  = car.replace(/Ø¹'/g, "Øº");
    car  = car.replace(/Ä¡/g, "Øº");
    car  = car.replace(/f/g, "Ù");
    car  = car.replace(/Ù'/g, "Ú¤");
    car  = car.replace(/v/g, "Ú¢");
    car  = car.replace(/q/g, "Ù‚");
    car  = car.replace(/Ù‚'/g, "Ú¨");
    car  = car.replace(/k/g, "Ùƒ");
    car  = car.replace(/Ùƒ'/g, "Ú­");
    car  = car.replace(/l/g, "Ù„");
    car  = car.replace(/m/g, "Ù…");
    car  = car.replace(/n/g, "Ù†");
    car  = car.replace(/h/g, "Ù‡");
    car  = car.replace(/Ù‡'/g, "Ø©");
    car  = car.replace(/[wouÃ´Ã»ÅÅ«]/g, "Ùˆ");
    car  = car.replace(/[yieÃ®Ä«]/g, "ÙŠ");
    car  = car.replace(/[YIE]/g, "Ù‰");
    car  = car.replace(/-/g, "Ø¡");
    car  = car.replace(/Ê¾/g, "Ø¡");
    car  = car.replace(/ÙˆØ¡Ø¡/g, "Ø¤");
    car  = car.replace(/ÙŠØ¡Ø¡/g, "Ø¦");
    car  = car.replace(/Ø§Ø¡Ø¡/g, "Ø¥");
    car  = car.replace(/I/g, "Ø¥");
    car  = car.replace(/A/g, "Ø¥");
    car  = car.replace(/Ø¡Ø§/g, "Ø£");
    car  = car.replace(/_/g, "Ù€");
    car  = car.replace(/\?/g, "ØŸ");
    car  = car.replace(/\;/g, "Ø›");
    car  = car.replace(/\,/g, "ØŒ");
    
    // mes modifications
    // 1
    //    car  = car.replace(/=Ø§/g, "xyz");
    car  = car.replace(/Ø§=/g, "ÙŽ");
    car  = car.replace(/Ø§Ù†=/g, "Ù‹");
    car  = car.replace(/Ùˆ=/g, "Ù");
    car  = car.replace(/ÙˆÙ†=/g, "ÙŒ");   
    // 2
    car  = car.replace(/=Ø¨Ø³Ù…Ù„Ù‡/g, "Ø¨Ø³Ù… Ø§Ù„Ù„Ù‡ Ø§Ù„Ø±Ø­Ù…Ù† Ø§Ù„Ø±Ø­ÙŠÙ…");
    car  = car.replace(/=Ø¨Ø§Ø¯Ø¦Ø©/g, "Ø§Ù„Ø­Ù…Ø¯ Ù„Ù„Ù‡ ÙˆØ§Ù„ØµÙ„Ø§Ø© ÙˆØ§Ù„Ø³Ù„Ø§Ù… Ø¹Ù„Ù‰ Ø±Ø³ÙˆÙ„ Ø§Ù„Ù„Ù‡ ØŒ ÙˆØ¹Ù„Ù‰ Ø¢Ù„Ù‡ ÙˆØµØ­Ø¨Ù‡ ÙˆÙ…Ù† Ø§ØªØ¨Ø¹ Ù‡Ø¯Ø§Ù‡ ØŒ Ø£Ù…Ø§ Ø¨Ø¹Ø¯ :");
    car  = car.replace(/=Ø§Ù„Ø³Ù„Ø§Ù…/g, "Ø§Ù„Ø³Ù„Ø§Ù… Ø¹Ù„ÙŠÙƒÙ… ÙˆØ±Ø­Ù…Ø© Ø§Ù„Ù„Ù‡ ÙˆØ¨Ø±ÙƒØ§ØªÙ‡");
    //    
    document.conversion.saisie.value=car;
    var obj=document.conversion.saisie;
    obj.focus();
    obj.scrollTop=obj.scrollHeight;
}