    let boxsWidth = 50;
    let boxsHeight = 50;

    const base = document.getElementById('base');

    const root = document.getElementById('root');
    console.dir(root);
    root.style.width = `${boxsWidth * 9.4}px`;
    root.style.height = `${boxsHeight * 9.4}px`;
    root.style.border = '1px solid blue';
    root.style.display = 'flex';
    root.style.flexWrap = 'wrap';
    root.style.justifyContent = 'center';
    root.style.alignItems = 'center';

    for(let boxs = 0; boxs < 9 * 9; boxs++) {
    creatBox = document.createElement('div');
    creatBox.style.width = `${boxsWidth}px`;
    creatBox.style.height = `${boxsHeight}px`;
    creatBox.style.border = '1px solid red';

    root.appendChild(creatBox);
    }