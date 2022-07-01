window.addEventListener("load", setup);

function setup()
{
    showWindow("firstPage");
    document.querySelector("#btnShowBrowser").addEventListener("click",function(){showWindow("searchPage"),clearTable(),loadTable(),document.querySelector("#txtSearch").value = "";});
    document.querySelector("#btnBack").addEventListener("click",function(){showWindow("firstPage")});
}

function showWindow(pDiv)
{
    hideAll();
    show(pDiv);
}

function hideAll()
{
    document.querySelector("#firstPage").style.display = "none";
    document.querySelector("#searchPage").style.display = "none";
}

function show(pDiv)
{
    document.querySelector("#"+pDiv).style.display = "block";
}