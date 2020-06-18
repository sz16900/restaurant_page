const renderContact = () => {
  const contact = document.getElementById('contact');
  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contact-wrapper', 'text-center');
  const address = document.createElement('h3');
  address.textContent = 'We are located at:';
  const p = document.createElement('p');
  p.classList.add('p-contact');
  p.textContent = '1234 Hello St. \r\n';
  p.textContent += 'Irvine, CA \r\n';
  p.textContent += '92604';
  const hours = document.createElement('h4');
  hours.textContent = 'M-F || 8am - 8pm';

  contactWrapper.appendChild(address);
  contactWrapper.appendChild(p);
  contactWrapper.appendChild(hours);
  contact.appendChild(contactWrapper);
};

export default renderContact;
