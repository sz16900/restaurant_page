const renderAbout = () => {
  const about = document.getElementById('about');
  const text = document.createElement('p');
  text.setAttribute('class', 'text-justify');
  text.textContent =
    'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.';
  about.appendChild(text);
};

export default renderAbout;
