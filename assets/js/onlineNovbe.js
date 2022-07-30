function Enableddl(chkddl) {
    var ddl = document.getElementById("ddl");

    ddl.disabled=chkddl.checked ? false : true;

    if(!ddl.disabled) {
        ddl.focus();
    }
}


function Enabledtll(chkdtdl) {
    var dtll = document.getElementById("dtll");
    var dtlls = document.getElementById("dtlls");

    dtll.disabled=chkdtdl.checked ? false : true;

    if(!dtll.disabled) {
        dtll.focus();
    }

    dtlls.disabled=chkdtdl.checked ? false : true;

    if(!dtlls.disabled) {
        dtlls.focus();
    }
}



