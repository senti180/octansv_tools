function CopyToClipboard(e){var o=$("<input>");$("body").append(o),o.val($(e).text()).select(),document.execCommand("copy"),o.remove(),alert("Másolva!")}