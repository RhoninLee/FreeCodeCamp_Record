function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])|([_|\s]+)/g, '$1-$2').toLowerCase();
}

spinalCase('This Is Spinal _____Tap');
