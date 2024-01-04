import BaseHead from "../components/BaseHead.astro";
import Footer from "../components/Footer.astro";
import SocialMediaItem from "../components/SocialMediaItem.astro";
import NavBarProfile from "../components/NavBarProfile.astro";
import ContactButton from "../components/ContactButton.astro";

<Fragment>
<html lang="en">
<head>
<BaseHead title={username} description={about} />
<style>{`
      .hideContent {
        overflow: hidden;
        line-height: 1.3em;
        white-space: nowrap;
        /* text-overflow: ellipsis; */
        -webkit-box-orient: vertical;
        max-width: 100%;

        display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
      }
      .showContent {
        line-height: 1.3em;
        height: auto;
      }
    `}</style>
</head>
<body>
<NavBarProfile />
<section class="bg-background text-white">
<div class="py-8 px-2 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
<div class="mx-auto max-w-screen-sm text-center">
<div class="flex justify-center items-center">
<img class="rounded-full w-52 h-52 lg:mb-12 mb-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="{title}" />
</div>
<div class="p-5">
<h3 class="text-xl font-bold tracking-tight text-gray-900">
<a href="#">{username}</a>
</h3>
<span>{title}</span>

<div>
<div class="content hideContent mt-3 text-justify">
{about}
</div>
<div class="show-more my-2 text-left">
<a id="show-text" href="#">Show more</a>
</div>
<div class="flex gap-3">
<ContactButton buttonType="Phone" phone="+50377420064" />
<ContactButton buttonType="Email" email="email@email.com" />
<ContactButton buttonType="WhatsApp" phone="+50377420064" />
</div>
</div>
{/** SOCIALMEDIA */}
<div>
<SocialMediaItem url="https://www.facebook.com" />
<SocialMediaItem />
<SocialMediaItem />
</div>
{/** /SOCIALMEDIA */}
</div>
</div>
</div>
<Footer />
</section>
<script>
{() => {
const button = document.querySelector("div.show-more");
const content = document.querySelector("div.content");
let text = document.getElementById("show-text");

button?.addEventListener("click", () => {
if (text?.textContent?.toUpperCase() === "SHOW MORE") {
text.innerHTML = "Show less";
content?.classList.remove("hideContent");
content?.classList.add("showContent");
} else {
text!.innerHTML = "Show more";
content?.classList.remove("showContent");
content?.classList.add("hideContent");
}
});
}}
</script>
</body></html>
</Fragment>;