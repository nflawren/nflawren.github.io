Vue.component('custom-nav', {
    template: `
        <nav>
            <a href="index.html" :class="{selected: isSelected('index')}">Home</a>
            <a href="aboutme.html" :class="{selected: isSelected('about')}">About Me</a>
            <a href="resume.html" :class="{selected: isSelected('resume')}">Resume</a>
            <a href="funfacts.html" :class="{selected: isSelected('facts')}">Fun Facts</a>
            <a href="photography.html" :class="{selected: isSelected('photo')}">Photography</a>
            <a href="contact.html" :class="{selected: isSelected('contact')}">Contact Me</a>
        </nav>`,
    methods: {
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