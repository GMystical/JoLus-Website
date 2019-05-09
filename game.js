const game = new Phaser.Game(400, 300, Phaser.AUTO,'',{

preload: preload,
create: create,
update, update
})



function preload (){

this.load.image('startmenu', '.assets/sky.png')


}

function create(){

startmenu = this.add.image(400, 300, 'startmenu');
}

function update(){}