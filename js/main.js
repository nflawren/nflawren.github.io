Vue.component('custom-nav', {
    template: `
        <nav @mouseover="hover()" @mouseout="noHover()">
            <a href="index.html" :class="{selected: isSelected('index')}">Home</a>
            <a href="aboutMe.html" :class="{selected: isSelected('about')}">About Me</a>
            <a href="resume.html" :class="{selected: isSelected('resume')}">Resume</a>
            <a href="funfacts.html" :class="{selected: isSelected('facts')}">Fun Facts</a>
            <a href="photography.html" :class="{selected: isSelected('photo')}">Photography</a>
            <a href="contact.html" :class="{selected: isSelected('contact')}">Contact Me</a>
        </nav>`,
    data: function() {
        return {
            isHover: true
        }
    },
    methods: {
        hover: function(){
            this.isHover = true;
        },
        noHover: function() {
            this.isHover = false;
        },
        isSelected: function(linkId) {
            return linkId === this.pageId;
        }
    },
    props: {
        pageId: String
    }
});
new Vue({
    el: '#nav'
});