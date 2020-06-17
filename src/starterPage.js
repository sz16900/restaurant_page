const starterPage = () => {
  // Lets grab the main containter
  const content = document.getElementById('main-container');

  //   Array of topics for tab
  const arrayOfSubjects = ['MENU', 'ABOUT', 'CONTACT'];

  // Lets create tags for the page
  const title = document.createElement('h1');
  const subTitle = document.createElement('h4');
  const tab = document.createElement('ul');
  const tabContent = document.createElement('div');

  //   Dynamically set attributes for links
  for (let i = 0; i < arrayOfSubjects.length; i += 1) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const div = document.createElement('div');
    li.setAttribute('class', 'nav-item');
    a.setAttribute('data-toggle', 'tab');
    a.setAttribute('role', 'tab');
    div.setAttribute('role', 'tabpanel');
    switch (i) {
      case 0:
        //   Set the links up with their attributes
        a.textContent = arrayOfSubjects[i];
        a.classList.add('nav-link', 'active');
        a.setAttribute('id', 'menu-tab');
        a.setAttribute('href', '#menu');
        a.setAttribute('aria-controls', 'menu');
        a.setAttribute('aria-selected', 'true');
        // Set the div's with their attributes
        div.classList.add('tab-pane', 'fade', 'show', 'active');
        div.setAttribute('id', 'menu');
        div.setAttribute('aria-labelledby', 'menu-tab');

        break;
      case 1:
        //   Set the links up with their attributes
        a.textContent = arrayOfSubjects[i];
        a.classList.add('nav-link');
        a.setAttribute('id', 'about-tab');
        a.setAttribute('href', '#about');
        a.setAttribute('aria-controls', 'about');
        a.setAttribute('aria-selected', 'false');
        // Set the div's with their attributes
        div.classList.add('tab-pane', 'fade');
        div.setAttribute('id', 'about');
        div.setAttribute('aria-labelledby', 'about-tab');
        break;
      case 2:
        //   Set the links up with their attributes
        a.textContent = arrayOfSubjects[i];
        a.classList.add('nav-link');
        a.setAttribute('id', 'contact-tab');
        a.setAttribute('href', '#contact');
        a.setAttribute('aria-controls', 'contact');
        a.setAttribute('aria-selected', 'false');
        // Set the div's with their attributes
        div.classList.add('tab-pane', 'fade');
        div.setAttribute('id', 'contact');
        div.setAttribute('aria-labelledby', 'contact-tab');
        break;
      default:
        console.log('Sorry, we are out of juicy.');
    }

    // Add to the parent tags
    li.appendChild(a);
    tab.appendChild(li);
    tabContent.appendChild(div);
  }

  // Add to h1
  title.textContent = 'DROOL';
  title.classList.add('display-1', 'text-center', 'page-title');

  // Add to h4
  subTitle.textContent = 'Oh my! Check this food out!';
  subTitle.classList.add('display-4', 'text-center', 'page-subtitle');

  //   Add to ul
  tab.classList.add('nav', 'nav-tabs', 'justify-content-center');
  tab.setAttribute('id', 'myTab');
  tab.setAttribute('role', 'tablist');

  //   Add to tab-content
  tabContent.setAttribute('class', 'tab-content');
  tabContent.setAttribute('id', 'myTabContent');

  //   Add to the main container
  content.appendChild(title);
  content.appendChild(subTitle);
  content.appendChild(tab);
  content.appendChild(tabContent);
};

export default starterPage;
