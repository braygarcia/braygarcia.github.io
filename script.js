const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");
const userIcon = document.querySelector("#logged-user-icon");

let menuOpenClose = false;

menuIcon.onclick = function () {
    menuOpenClose = !menuOpenClose;
    sidebar.classList.toggle("large-sidebar");
    if (menuOpenClose) {
        sidebar.innerHTML += `
        <div class="subscribed-list">
            <hr>
            <h3>SUBSCRIBED</h3>
            <a href=""><img alt="" src="https://yt3.ggpht.com/yti/ADpuP3OJHblXPPR7NThaqNU-HYmq1_vLlcjHlJ8ej_hYw-g=s88-c-k-c0x00ffffff-no-rj"><p>channel name</p></a>
            <a><img alt="" src="https://yt3.ggpht.com/yti/ADpuP3OJHblXPPR7NThaqNU-HYmq1_vLlcjHlJ8ej_hYw-g=s88-c-k-c0x00ffffff-no-rj"><p> channel name</p></a>
            <a><img alt="" src="https://yt3.ggpht.com/yti/ADpuP3OJHblXPPR7NThaqNU-HYmq1_vLlcjHlJ8ej_hYw-g=s88-c-k-c0x00ffffff-no-rj"><p>channel name</p></a>
            <a><img alt="" src="https://yt3.ggpht.com/yti/ADpuP3OJHblXPPR7NThaqNU-HYmq1_vLlcjHlJ8ej_hYw-g=s88-c-k-c0x00ffffff-no-rj"><p>channel name</p></a>
            <a><img alt="" src="https://yt3.ggpht.com/yti/ADpuP3OJHblXPPR7NThaqNU-HYmq1_vLlcjHlJ8ej_hYw-g=s88-c-k-c0x00ffffff-no-rj"><p>channel name</p></a>
        </div>`
    } else{
        const subscribedList = document.querySelector(".subscribed-list");
        subscribedList.remove();
    }
    // sidebar.appendChild()
}

function playVideo(x) {
    const videoId = x.getAttribute("videoId");
    console.log(videoId);
    const element = document.getElementById(`video-id-${videoId}`);
    let videoIsReady = element.contains(document.querySelector(".thumbnail-video"))
    !videoIsReady && (element.innerHTML += `<iframe class="thumbnail-video" width="320" height="180" src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1"></iframe>`);
    //!true && (console.log("video ready"));
    element.addEventListener("mouseout",removeVideo);
    element.removeEventListener("mouseout",()=>{});
}
function removeVideo(){
    document.querySelector(".thumbnail-video").remove();
}
function openUserSettings(){
    const userInfoDiv = document.querySelector(".user-info-container")
    userInfoDiv.classList.toggle("hidden");
}
function  openNotificationModal(){
    const userInfoDiv = document.querySelector(".notification-info-container")
    userInfoDiv.classList.toggle("hidden");
}
function  openCreatorModal(){
    const userInfoDiv = document.querySelector(".creator-info-container")
    userInfoDiv.classList.toggle("hidden");
}
async function setActiveTag() {
    document.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");
    let keyword=event.target.textContent;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=AIzaSyBSwBidJQYx2_cC1UuZptl07HPetJ24iTU`);
    data = await response.json();
    loadVideos(data.items)
}
function showLargeSidebar(){
    const userInfoDiv = document.querySelector(".large-sidebar-display")
    userInfoDiv.classList.toggle("hidden");
}