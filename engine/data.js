
var levels = [];

var tmp_animcycle;
var tmp_entry;
var tmp_cutscene;
var tmp_level;
var tmp_map;
var tmp_scene;
var tmp_room;
var tmp_person;
var tmp_speak;
var tmp_option;
var tmp_object;
var tmp_view;
var tmp_zone;
var tmp_porthole;
var tmp_wildcard;

var init_levels = function()
{

tmp_level = new level();
tmp_level.id = "tunic";
tmp_level.fqid = "tunic";
{
tmp_level.primary = false;
tmp_level.toolbar_animcycle_id = "toolbar";
tmp_level.icon_map_animcycle_id = "icon_map";
tmp_level.icon_notebook_animcycle_id = "icon_notebook";
tmp_level.notebook_animcycle_id = "notebook";
tmp_level.avatar_walk_animcycle_id = "avatar_walk";
tmp_level.avatar_idle_animcycle_id = "avatar_idle";
tmp_level.avatar_act_animcycle_id = "avatar_act";
tmp_level.person_hover_animcycle_id = "null";
tmp_level.object_hover_animcycle_id = "null";
tmp_level.porthole_hover_animcycle_id = "null";
tmp_level.noteworthy = false;
tmp_level.locks = [
];
tmp_level.notlocks = [
];

tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_act";
tmp_animcycle.fqid = "tunic.avatar_act";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_act/0.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_act/1.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_act/2.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_idle";
tmp_animcycle.fqid = "tunic.avatar_idle";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_idle/0.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_idle/1.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_idle/2.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_walk";
tmp_animcycle.fqid = "tunic.avatar_walk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/0.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/1.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/2.png"));
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/avatar_walk/3.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "door";
tmp_animcycle.fqid = "tunic.door";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/door/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "icon_map";
tmp_animcycle.fqid = "tunic.icon_map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/icon_map/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "icon_notebook";
tmp_animcycle.fqid = "tunic.icon_notebook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/icon_notebook/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "map";
tmp_animcycle.fqid = "tunic.map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/map/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook";
tmp_animcycle.fqid = "tunic.notebook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/notebook/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "null";
tmp_animcycle.fqid = "tunic.null";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/null/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_drycleaner_entry";
tmp_animcycle.fqid = "tunic.room_drycleaner_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_drycleaner_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_drycleaner_frontdesk";
tmp_animcycle.fqid = "tunic.room_drycleaner_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_drycleaner_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_closet/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_entry";
tmp_animcycle.fqid = "tunic.room_historicalsociety_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_frontdesk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_stocks";
tmp_animcycle.fqid = "tunic.room_historicalsociety_stocks";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_historicalsociety_stocks/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_humanecology_entry";
tmp_animcycle.fqid = "tunic.room_humanecology_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_humanecology_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_humanecology_frontdesk";
tmp_animcycle.fqid = "tunic.room_humanecology_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_humanecology_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_humanecology_hallway";
tmp_animcycle.fqid = "tunic.room_humanecology_hallway";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_humanecology_hallway/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_kohlcenter_entry";
tmp_animcycle.fqid = "tunic.room_kohlcenter_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_kohlcenter_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_kohlcenter_halloffame";
tmp_animcycle.fqid = "tunic.room_kohlcenter_halloffame";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_kohlcenter_halloffame/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_library_entry";
tmp_animcycle.fqid = "tunic.room_library_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_library_entry/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_library_frontdesk";
tmp_animcycle.fqid = "tunic.room_library_frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_library_frontdesk/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_library_microfiche";
tmp_animcycle.fqid = "tunic.room_library_microfiche";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/room_library_microfiche/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_drycleaner";
tmp_animcycle.fqid = "tunic.scene_drycleaner";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_drycleaner/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_historicalsociety";
tmp_animcycle.fqid = "tunic.scene_historicalsociety";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_historicalsociety/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_humanecology";
tmp_animcycle.fqid = "tunic.scene_humanecology";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_humanecology/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_kohlcenter";
tmp_animcycle.fqid = "tunic.scene_kohlcenter";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_kohlcenter/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_library";
tmp_animcycle.fqid = "tunic.scene_library";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/scene_library/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "toolbar";
tmp_animcycle.fqid = "tunic.toolbar";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frames = [];
tmp_animcycle.frames.push(GenImg("assets/data/levels/tunic/animcycles/toolbar/0.png"));
}
tmp_level.animcycles.push(tmp_animcycle);
for(var i = 0; i < tmp_level.animcycles.length; i++)
if(tmp_level.animcycles[i].id == "null") null_animcycle = tmp_level.animcycles[i];
tmp_entry = new entry();
tmp_entry.id = "null";
tmp_entry.fqid = "tunic.null";
{
tmp_entry.index = 0;
tmp_entry.x = 0;
tmp_entry.y = 0;
tmp_entry.w = canv.width/2;
tmp_entry.h = 100;
tmp_entry.animcycle_id = "null";
tmp_entry.locks = [
];
tmp_entry.notlocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
}
tmp_level.entrys.push(tmp_entry);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "null";
tmp_cutscene.fqid = "tunic.null";
{
tmp_cutscene.noteworthy = false;
tmp_cutscene.locks = [
];
tmp_cutscene.notlocks = [
];

tmp_cutscene.commands = [];

/*
Possible Commands:
COMMAND_CREATE
COMMAND_DESTROY
COMMAND_ANIMATE
COMMAND_TWEEN
COMMAND_WAIT
COMMAND_END

Possible Entity Types:
ENTITY_ANIM
ENTITY_TEXT
*/

/*
//skeleton command addition
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = COMMAND_NULL;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = ENTITY_NULL;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene_command.x = 10;
tmp_cutscene_command.y = 10;
tmp_cutscene_command.z = 0;
tmp_cutscene_command.w = 10;
tmp_cutscene_command.h = 10;
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene_command.raw_text = "null";
tmp_cutscene_command.text = stextToLines(tmp_cutscene_command.raw_text,tmp_cutscene_command.w);
tmp_cutscene.commands.push(tmp_cutscene_command);
*/

//Leave this at the end- remember to set tmp_cutscene_command.t!
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

}
tmp_level.cutscenes.push(tmp_cutscene);
tmp_map = new map();
tmp_map.id = "madison";
tmp_map.fqid = "tunic.madison";
{
tmp_map.animcycle_id = "map";
tmp_map.noteworthy = false;
tmp_map.locks = [
];
tmp_map.notlocks = [
];

tmp_map.animcycle_inst = gen_animcycle_inst(tmp_map.animcycle_id,tmp_level.animcycles);
tmp_scene = new scene();
tmp_scene.id = "drycleaner";
tmp_scene.fqid = "tunic.madison.drycleaner";
{
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_scene.animcycle_id = "scene_drycleaner";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.drycleaner.entry";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_drycleaner_entry";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.drycleaner.entry.tofrontdesk";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2-100;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.drycleaner.entry.tomap";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = ""; //to map
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.drycleaner.frontdesk";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_drycleaner_frontdesk";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.madison.drycleaner.frontdesk.worker";
{
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 200;
tmp_person.h = 200;
tmp_person.animcycle_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.drycleaner.frontdesk.worker.hub";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.drycleaner.frontdesk.worker.hub.goodbye";
{
tmp_option.x = 100;
tmp_option.y = 100;
tmp_option.w = canv.width/2;
tmp_option.h = 30; //h of single line
tmp_option.static = false; //static = use xyw
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "logbook";
tmp_object.fqid = "tunic.madison.drycleaner.frontdesk.logbook";
{
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 100;
tmp_object.h = 100;
tmp_object.animcycle_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.drycleaner.frontdesk.logbook.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.drycleaner.frontdesk.toentry";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "historicalsociety";
tmp_scene.fqid = "tunic.madison.historicalsociety";
{
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "closet";
tmp_room.fqid = "tunic.madison.historicalsociety.closet";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_historicalsociety_closet";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "grandpa";
tmp_person.fqid = "tunic.madison.historicalsociety.closet.grandpa";
{
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 200;
tmp_person.h = 200;
tmp_person.animcycle_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.historicalsociety.closet.grandpa.hub";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.historicalsociety.closet.grandpa.hub.goodbye";
{
tmp_option.x = 100;
tmp_option.y = 100;
tmp_option.w = canv.width/2;
tmp_option.h = 30; //h of single line
tmp_option.static = false; //static = use xyw
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "tunic";
tmp_object.fqid = "tunic.madison.historicalsociety.closet.tunic";
{
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 100;
tmp_object.h = 100;
tmp_object.animcycle_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.historicalsociety.closet.tunic.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.historicalsociety.closet.toentry";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width-tmp_porthole.w;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.historicalsociety.entry";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_historicalsociety_entry";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset";
tmp_porthole.fqid = "tunic.madison.historicalsociety.entry.tocloset";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = 0;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "closet";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.historicalsociety.entry.tomap";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "map";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.madison.historicalsociety.entry.tostacks";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2-100;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.historicalsociety.frontdesk";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_historicalsociety_frontdesk";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "archivist";
tmp_person.fqid = "tunic.madison.historicalsociety.frontdesk.archivist";
{
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 200;
tmp_person.h = 200;
tmp_person.animcycle_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.hub";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.historicalsociety.frontdesk.archivist.hub.goodbye";
{
tmp_option.x = 100;
tmp_option.y = 100;
tmp_option.w = canv.width/2;
tmp_option.h = 30; //h of single line
tmp_option.static = false; //static = use xyw
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.madison.historicalsociety.frontdesk.tostacks";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "stacks";
tmp_room.fqid = "tunic.madison.historicalsociety.stacks";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_historicalsociety_stacks";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "journalsaz";
tmp_object.fqid = "tunic.madison.historicalsociety.stacks.journalsaz";
{
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 100;
tmp_object.h = 100;
tmp_object.animcycle_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.historicalsociety.stacks.journalsaz.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.historicalsociety.stacks.toentry";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.historicalsociety.stacks.tofrontdesk";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2-100;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "humanecology";
tmp_scene.fqid = "tunic.madison.humanecology";
{
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_scene.animcycle_id = "scene_humanecology";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.humanecology.entry";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_humanecology_entry";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.madison.humanecology.entry.tohallway";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2-100;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.humanecology.entry.tomap";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = ""; //to map
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.humanecology.frontdesk";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_humanecology_frontdesk";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.madison.humanecology.frontdesk.worker";
{
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 200;
tmp_person.h = 200;
tmp_person.animcycle_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.humanecology.frontdesk.worker.hub";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.humanecology.frontdesk.worker.hub.goodbye";
{
tmp_option.x = 100;
tmp_option.y = 100;
tmp_option.w = canv.width/2;
tmp_option.h = 30; //h of single line
tmp_option.static = false; //static = use xyw
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.madison.humanecology.frontdesk.tohallway";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = 0;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "hallway";
tmp_room.fqid = "tunic.madison.humanecology.hallway";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_humanecology_hallway";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.humanecology.hallway.toentry";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.humanecology.hallway.tofrontdesk";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width-tmp_porthole.w;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "kohlcenter";
tmp_scene.fqid = "tunic.madison.kohlcenter";
{
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_scene.animcycle_id = "scene_kohlcenter";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.kohlcenter.entry";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_cohlcenter_entry";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tohalloffame";
tmp_porthole.fqid = "tunic.madison.kohlcenter.entry.tohalloffame";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2-100;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "halloffame";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.kohlcenter.entry.tomap";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = ""; //to map
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "halloffame";
tmp_room.fqid = "tunic.madison.kohlcenter.halloffame";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_kohlcenter_halloffame";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "oldpictures";
tmp_object.fqid = "tunic.madison.kohlcenter.halloffame.oldpictures";
{
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 100;
tmp_object.h = 100;
tmp_object.animcycle_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.kohlcenter.halloffame.oldpictures.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.kohlcenter.halloffame.toentry";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "library";
tmp_scene.fqid = "tunic.madison.library";
{
tmp_scene.primary = false;
tmp_scene.x = 100;
tmp_scene.y = 100;
tmp_scene.w = 100;
tmp_scene.h = 100;
tmp_scene.animcycle_id = "scene_library";
tmp_scene.noteworthy = false;
tmp_scene.locks = [
];
tmp_scene.notlocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.madison.library.entry";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_library_entry";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.library.entry.tofrontdesk";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2-100;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.madison.library.entry.tomap";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = ""; //to map
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.madison.library.frontdesk";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_library_frontdesk";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.madison.library.frontdesk.worker";
{
tmp_person.x = 70;
tmp_person.y = canv.height/2-100;
tmp_person.w = 200;
tmp_person.h = 200;
tmp_person.animcycle_id = "null";
tmp_person.noteworthy = false;
tmp_person.locks = [
];
tmp_person.notlocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.madison.library.frontdesk.worker.hub";
{
tmp_speak.primary = false;
tmp_speak.x = 500;
tmp_speak.y = 150;
tmp_speak.w = canv.width/2;
tmp_speak.h = 30; //h of a single line
tmp_speak.animcycle_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON; //SPEAKER_PERSON or SPEAKER_PLAYER
tmp_speak.options_x = 500;
tmp_speak.options_y = 250;
tmp_speak.options_w = canv.width/2;
tmp_speak.options_h = 30; //h of a single line
tmp_speak.noteworthy = false;

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.madison.library.frontdesk.worker.hub.goodbye";
{
tmp_option.x = 100;
tmp_option.y = 100;
tmp_option.w = canv.width/2;
tmp_option.h = 30; //h of single line
tmp_option.static = false; //static = use xyw
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.noteworthy = false;
tmp_option.locks = [
];
tmp_option.notlocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.madison.library.frontdesk.toentry";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomicrofiche";
tmp_porthole.fqid = "tunic.madison.library.frontdesk.tomicrofiche";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height/2-tmp_porthole.h/2-100;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "microfiche";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "microfiche";
tmp_room.fqid = "tunic.madison.library.microfiche";
{
tmp_room.primary = false;
tmp_room.animcycle_id = "room_library_microfiche";
tmp_room.nav_x = 100;
tmp_room.nav_y = canv.height/2;
tmp_room.nav_w = canv.width-200;
tmp_room.nav_h = canv.height/2-100;
tmp_room.start_x = canv.width/2;
tmp_room.start_y = canv.height/2;
tmp_room.noteworthy = false;
tmp_room.locks = [
];
tmp_room.notlocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "newspaper";
tmp_object.fqid = "tunic.madison.library.microfiche.newspaper";
{
tmp_object.x = canv.width-200;
tmp_object.y = 100;
tmp_object.w = 100;
tmp_object.h = 100;
tmp_object.animcycle_id = "null";
tmp_object.noteworthy = false;
tmp_object.locks = [
];
tmp_object.notlocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.madison.library.microfiche.newspaper.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "null";
tmp_view.noteworthy = false;

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.madison.library.microfiche.tofrontdesk";
{
tmp_porthole.w = 100;
tmp_porthole.h = 100;
tmp_porthole.x = canv.width/2-tmp_porthole.w/2;
tmp_porthole.y = canv.height-tmp_porthole.h;
tmp_porthole.animcycle_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_x = 0;
tmp_porthole.target_start_y = 0;
tmp_porthole.noteworthy = false;
tmp_porthole.locks = [
];
tmp_porthole.notlocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_map.scenes.push(tmp_scene);
}
tmp_level.map = tmp_map;
}
levels.push(tmp_level);
}

