
var levels = [];

var tmp_animcycle;
var tmp_audio;
var tmp_entry;
var tmp_level;
var tmp_scene;
var tmp_room;
var tmp_cutscene;
var tmp_person;
var tmp_speak;
var tmp_option;
var tmp_object;
var tmp_observation;
var tmp_view;
var tmp_zone;
var tmp_porthole;
var tmp_wildcard;
var tmp_inert;

var init_levels = function()
{

tmp_level = new level();
tmp_level.id = "tunic";
tmp_level.fqid = "tunic";
{
tmp_level.primary = true;
tmp_level.intro_room_id = "tunic.historicalsociety.closet";
tmp_level.avatar_walk_animcycle_id = "avatar_walk";
tmp_level.avatar_idle_animcycle_id = "avatar_idle";
tmp_level.avatar_act_animcycle_id = "avatar_act";
tmp_level.avatar_ww = 124.2914274419755;
tmp_level.avatar_wh = 227.18935293838604;
tmp_level.exit_animcycle_id = "exit";
tmp_level.toolbar_animcycle_id = "toolbar";
tmp_level.toolbar_audio_id = "null";
tmp_level.map_animcycle_id = "map";
tmp_level.map_audio_id = "null";
tmp_level.notebook_animcycle_id = "notebook";
tmp_level.notebook_audio_id = "null";
tmp_level.icon_map_animcycle_id = "icon_map";
tmp_level.icon_notebook_animcycle_id = "icon_notebook";
tmp_level.person_hover_animcycle_id = "hover_person";
tmp_level.object_hover_animcycle_id = "hover_object";
tmp_level.observation_hover_animcycle_id = "hover_observation";
tmp_level.porthole_hover_animcycle_id = "hover_porthole";
tmp_level.zone_hover_animcycle_id = "hover_zone";
tmp_level.option_hover_animcycle_id = "hover_option";
tmp_level.map_hover_animcycle_id = "hover_map";
tmp_level.ripple_click_animcycle_id = "click_ripple";
tmp_level.cursor_w = 40;
tmp_level.cursor_h = 40;
tmp_level.hover_w = 40;
tmp_level.hover_h = 40;
tmp_level.notifications_w = 200;
tmp_level.notifications_h = 30;
tmp_level.target_lerp_s = 0.03;
tmp_level.raw_notifications = [
];
tmp_level.unlocks = [
];
tmp_level.relocks = [
];
tmp_animcycle = new animcycle();
tmp_animcycle.id = "archivist";
tmp_animcycle.fqid = "tunic.archivist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/archivist/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_act";
tmp_animcycle.fqid = "tunic.avatar_act";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_act/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_idle/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "avatar_walk";
tmp_animcycle.fqid = "tunic.avatar_walk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 5;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/4.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/5.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/6.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/7.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/8.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/9.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/10.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/avatar_walk/11.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "bg";
tmp_animcycle.fqid = "tunic.bg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/bg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "boss";
tmp_animcycle.fqid = "tunic.boss";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/boss/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "capitol_rotunda";
tmp_animcycle.fqid = "tunic.capitol_rotunda";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/capitol_rotunda/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "cleaner";
tmp_animcycle.fqid = "tunic.cleaner";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/cleaner/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "click_ripple";
tmp_animcycle.fqid = "tunic.click_ripple";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 3;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/0.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/1.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/2.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/3.png");
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/click_ripple/4.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "coffeecup";
tmp_animcycle.fqid = "tunic.coffeecup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/coffeecup/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/door/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "ecologist";
tmp_animcycle.fqid = "tunic.ecologist";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/ecologist/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_basketballplaque_img";
tmp_animcycle.fqid = "tunic.entry_basketballplaque_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_basketballplaque_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_cleanercard_img";
tmp_animcycle.fqid = "tunic.entry_cleanercard_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_cleanercard_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_cleanerslip_img";
tmp_animcycle.fqid = "tunic.entry_cleanerslip_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_cleanerslip_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_archivist_img";
tmp_animcycle.fqid = "tunic.entry_quest_archivist_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_archivist_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_basketball_img";
tmp_animcycle.fqid = "tunic.entry_quest_basketball_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_basketball_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_museum_img";
tmp_animcycle.fqid = "tunic.entry_quest_museum_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_museum_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_quest_textile_img";
tmp_animcycle.fqid = "tunic.entry_quest_textile_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_quest_textile_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_teddytaken_img";
tmp_animcycle.fqid = "tunic.entry_teddytaken_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_teddytaken_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_tunic_img";
tmp_animcycle.fqid = "tunic.entry_tunic_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_tunic_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "entry_x_img";
tmp_animcycle.fqid = "tunic.entry_x_img";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/entry_x_img/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "exit";
tmp_animcycle.fqid = "tunic.exit";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/exit/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fg";
tmp_animcycle.fqid = "tunic.fg";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fg/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgartifacts";
tmp_animcycle.fqid = "tunic.fgartifacts";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgartifacts/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgcarts";
tmp_animcycle.fqid = "tunic.fgcarts";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgcarts/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgdust";
tmp_animcycle.fqid = "tunic.fgdust";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgdust/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgoffice";
tmp_animcycle.fqid = "tunic.fgoffice";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgoffice/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "fgpipes";
tmp_animcycle.fqid = "tunic.fgpipes";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/fgpipes/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "frontdesk";
tmp_animcycle.fqid = "tunic.frontdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/frontdesk/desk.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "frontdesk_chair";
tmp_animcycle.fqid = "tunic.frontdesk_chair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/frontdesk_chair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "frontdesk_deskchair";
tmp_animcycle.fqid = "tunic.frontdesk_deskchair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/frontdesk_deskchair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "gramps";
tmp_animcycle.fqid = "tunic.gramps";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/gramps/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_door";
tmp_animcycle.fqid = "tunic.hblip_door";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hblip_door/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_interact";
tmp_animcycle.fqid = "tunic.hblip_interact";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hblip_interact/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hblip_person";
tmp_animcycle.fqid = "tunic.hblip_person";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hblip_person/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_map";
tmp_animcycle.fqid = "tunic.hover_map";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_map/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_object";
tmp_animcycle.fqid = "tunic.hover_object";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_object/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_observation";
tmp_animcycle.fqid = "tunic.hover_observation";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_observation/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_option";
tmp_animcycle.fqid = "tunic.hover_option";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_option/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_person";
tmp_animcycle.fqid = "tunic.hover_person";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_person/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_porthole";
tmp_animcycle.fqid = "tunic.hover_porthole";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_porthole/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "hover_zone";
tmp_animcycle.fqid = "tunic.hover_zone";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/hover_zone/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/icon_map/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/icon_notebook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "jersey";
tmp_animcycle.fqid = "tunic.jersey";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/jersey/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "jersey_front";
tmp_animcycle.fqid = "tunic.jersey_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/jersey_front/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journalsaz";
tmp_animcycle.fqid = "tunic.journalsaz";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journalsaz/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "journalsaz_front";
tmp_animcycle.fqid = "tunic.journalsaz_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/journalsaz_front/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "librarian";
tmp_animcycle.fqid = "tunic.librarian";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/librarian/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "logbook";
tmp_animcycle.fqid = "tunic.logbook";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/logbook/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "logbook_front";
tmp_animcycle.fqid = "tunic.logbook_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/logbook_front/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "magnifyingglass";
tmp_animcycle.fqid = "tunic.magnifyingglass";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/magnifyingglass/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/map/map.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "newspaper";
tmp_animcycle.fqid = "tunic.newspaper";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/newspaper/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "newspaper_front";
tmp_animcycle.fqid = "tunic.newspaper_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/newspaper_front/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "notebook_object";
tmp_animcycle.fqid = "tunic.notebook_object";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/notebook_object/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/null/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "oldpictures";
tmp_animcycle.fqid = "tunic.oldpictures";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/oldpictures/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "oldpictures_front";
tmp_animcycle.fqid = "tunic.oldpictures_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/oldpictures_front/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "report";
tmp_animcycle.fqid = "tunic.report";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/report/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "report_hand";
tmp_animcycle.fqid = "tunic.report_hand";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/report_hand/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "retirement_letter";
tmp_animcycle.fqid = "tunic.retirement_letter";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/retirement_letter/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "retirement_letter_closeup";
tmp_animcycle.fqid = "tunic.retirement_letter_closeup";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/retirement_letter_closeup/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_capitol_entry";
tmp_animcycle.fqid = "tunic.room_capitol_entry";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_capitol_entry/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_capitol_hall";
tmp_animcycle.fqid = "tunic.room_capitol_hall";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_capitol_hall/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_drycleaner_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_drycleaner_frontdesk/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_chair";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_chair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_chair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_desk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_desk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_desk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_dirty";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_dirty";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_dirty/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_dirty_chair";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_dirty_chair";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_dirty_chair/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_dirty_desk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_dirty_desk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_dirty_desk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_fgdesk";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_fgdesk";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_fgdesk/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_closet_fgpipes";
tmp_animcycle.fqid = "tunic.room_historicalsociety_closet_fgpipes";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_closet_fgpipes/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_collection";
tmp_animcycle.fqid = "tunic.room_historicalsociety_collection";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_collection/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_frontdesk/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_hallway";
tmp_animcycle.fqid = "tunic.room_historicalsociety_hallway";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_hallway/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "room_historicalsociety_stacks";
tmp_animcycle.fqid = "tunic.room_historicalsociety_stacks";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_historicalsociety_stacks/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_humanecology_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_humanecology_frontdesk/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_humanecology_hallway/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_kohlcenter_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_kohlcenter_halloffame/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_library_entry/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_library_frontdesk/0.jpg");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/room_library_microfiche/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scarf";
tmp_animcycle.fqid = "tunic.scarf";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scarf/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "scene_capitol";
tmp_animcycle.fqid = "tunic.scene_capitol";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_capitol/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_drycleaner/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_historicalsociety/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_humanecology/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_kohlcenter/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/scene_library/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "teddy";
tmp_animcycle.fqid = "tunic.teddy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/teddy/0.png");
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

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/toolbar/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic";
tmp_animcycle.fqid = "tunic.tunic";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_back";
tmp_animcycle.fqid = "tunic.tunic_back";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic_back/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_front";
tmp_animcycle.fqid = "tunic.tunic_front";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic_front/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "tunic_slip";
tmp_animcycle.fqid = "tunic.tunic_slip";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/tunic_slip/0.jpg");
}
tmp_level.animcycles.push(tmp_animcycle);
tmp_animcycle = new animcycle();
tmp_animcycle.id = "youngboy";
tmp_animcycle.fqid = "tunic.youngboy";
{
tmp_animcycle.w = 0;
tmp_animcycle.h = 0;
tmp_animcycle.frame_t = 10;
tmp_animcycle.offset_t = 0;

tmp_animcycle.frame_files = [];
tmp_animcycle.frames = [];
tmp_animcycle.frame_files.push("assets/data/levels/tunic/animcycles/youngboy/0.png");
}
tmp_level.animcycles.push(tmp_animcycle);
for(var i = 0; i < tmp_level.animcycles.length; i++)
if(tmp_level.animcycles[i].id == "null") null_animcycle = tmp_level.animcycles[i];
tmp_audio = new audio();
tmp_audio.id = "door";
tmp_audio.fqid = "tunic.door";
{
tmp_audio.aud = GenAudio("assets/data/levels/tunic/audios/door.mp3");
}
tmp_level.audios.push(tmp_audio);
tmp_audio = new audio();
tmp_audio.id = "null";
tmp_audio.fqid = "tunic.null";
{
tmp_audio.aud = GenAudio("assets/data/levels/tunic/audios/null.mp3");
}
tmp_level.audios.push(tmp_audio);
for(var i = 0; i < tmp_level.audios.length; i++)
if(tmp_level.audios[i].id == "null") null_audio = tmp_level.audios[i];
tmp_entry = new entry();
tmp_entry.id = "entry_basketballplaque";
tmp_entry.fqid = "tunic.entry_basketballplaque";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 314;
tmp_entry.wh = 162.99999999999997;
tmp_entry.wx = -195.0000000000001;
tmp_entry.wy = -187.5;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_basketballplaque_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_cleanercard";
tmp_entry.fqid = "tunic.entry_cleanercard";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 358.0000000000001;
tmp_entry.wh = 150.00000000000003;
tmp_entry.wx = 181.99999999999997;
tmp_entry.wy = -169.99999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_cleanercard_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_cleanerslip";
tmp_entry.fqid = "tunic.entry_cleanerslip";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 313;
tmp_entry.wh = 118.99999999999997;
tmp_entry.wx = -186.49999999999983;
tmp_entry.wy = 43.500000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_cleanerslip_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist";
tmp_entry.fqid = "tunic.entry_quest_archivist";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 356;
tmp_entry.wh = 55.00000000000001;
tmp_entry.wx = 185.99999999999994;
tmp_entry.wy = 10.499999999999982;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_archivist_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_archivist_x";
tmp_entry.fqid = "tunic.entry_quest_archivist_x";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 339;
tmp_entry.wh = 54.99999999999997;
tmp_entry.wx = 185.5000000000001;
tmp_entry.wy = 9.500000000000142;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_basketball";
tmp_entry.fqid = "tunic.entry_quest_basketball";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 344.00000000000006;
tmp_entry.wh = 70.99999999999999;
tmp_entry.wx = -187.99999999999986;
tmp_entry.wy = -65.50000000000004;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_basketball_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_basketball_x";
tmp_entry.fqid = "tunic.entry_quest_basketball_x";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 353.0000000000001;
tmp_entry.wh = 55.999999999999986;
tmp_entry.wx = -183.5;
tmp_entry.wy = -61.99999999999999;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_museum";
tmp_entry.fqid = "tunic.entry_quest_museum";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 365.99999999999994;
tmp_entry.wh = 57.999999999999986;
tmp_entry.wx = 185.9999999999999;
tmp_entry.wy = 245;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_museum_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_museum_x";
tmp_entry.fqid = "tunic.entry_quest_museum_x";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 351.00000000000006;
tmp_entry.wh = 49.99999999999986;
tmp_entry.wx = 182.5;
tmp_entry.wy = 246.99999999999994;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile";
tmp_entry.fqid = "tunic.entry_quest_textile";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 357;
tmp_entry.wh = 57.999999999999986;
tmp_entry.wx = 188.5;
tmp_entry.wy = -57.99999999999985;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_quest_textile_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_quest_textile_x";
tmp_entry.fqid = "tunic.entry_quest_textile_x";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 334;
tmp_entry.wh = 56.999999999999964;
tmp_entry.wx = 193.99999999999997;
tmp_entry.wy = -56.500000000000014;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_x_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_teddytaken";
tmp_entry.fqid = "tunic.entry_teddytaken";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 342;
tmp_entry.wh = 169.99999999999997;
tmp_entry.wx = 177.99999999999997;
tmp_entry.wy = 126.99999999999999;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_teddytaken_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "entry_tunic";
tmp_entry.fqid = "tunic.entry_tunic";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 348;
tmp_entry.wh = 182.00000000000003;
tmp_entry.wx = -197;
tmp_entry.wy = 196;
tmp_entry.wz = 100;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "entry_tunic_img";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_entry = new entry();
tmp_entry.id = "null";
tmp_entry.fqid = "tunic.null";
{
tmp_entry.primary = undefined;
tmp_entry.ww = 116.99999999999996;
tmp_entry.wh = 244.9999999999999;
tmp_entry.wx = -427.50000000000006;
tmp_entry.wy = -206.50000000000006;
tmp_entry.wz = 0;
tmp_entry.page = 0;
tmp_entry.animcycle_id = "null";
tmp_entry.audio_id = "null";
tmp_entry.raw_notifications = [
];
tmp_entry.unlocks = [
];
tmp_entry.relocks = [
];

tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_entry.raw_notifications.length; i++) tmp_entry.notifications[i] = stextToLines(tmp_entry.raw_notifications[i], tmp_level.notifications_w);
}
tmp_level.entrys.push(tmp_entry);
tmp_scene = new scene();
tmp_scene.id = "capitol";
tmp_scene.fqid = "tunic.capitol";
{
tmp_scene.primary = false;
tmp_scene.ww = 213;
tmp_scene.wh = 211.99999999999997;
tmp_scene.wx = 2.500000000000014;
tmp_scene.wy = 13.000000000000014;
tmp_scene.animcycle_id = "scene_capitol";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "hall";
tmp_room.fqid = "tunic.capitol.hall";
{
tmp_room.primary = false;
tmp_room.ww = 2000;
tmp_room.wh = 1162;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_capitol_hall";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 1000;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:112.16666666666663, wy:-217.46969696969683, ww:1129.4848484848485, wh:217.6666666666667 },
];
tmp_room.lights = [
{wx:781.5606060606058, wy:379.34848484848465, ww:126.45454545454568, wh:61.60606060606062 },
];
tmp_room.shadows = [
{wx:653.681818181818, wy:371.77272727272714, ww:117.36363636363622, wh:67.66666666666671 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.capitol.hall.boss";
{
tmp_person.ww = 150.0737668615271;
tmp_person.wh = 313.3287704263341;
tmp_person.wx = 299.70453437843406;
tmp_person.wy = 40.98731418180236;
tmp_person.wz = 0;
tmp_person.act_wx = -140.83388568593585;
tmp_person.act_wy = 5.555867533397077;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 48.53549656579855;
tmp_person.hover_icon_wy = 136.49783377739953;
tmp_person.animcycle_id = "boss";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
"tunic.kohlcenter.halloffame.oldpictures.hub",
"tunic.kohlcenter.halloffame.jersey.hub",
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_01a";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_01a";
{
tmp_speak.primary = false;
tmp_speak.wx = -14.565378662189346;
tmp_speak.wy = 314.7000014870106;
tmp_speak.w = 228.69814225923326;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Where's Wells?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.capitol.hall.boss.boss_chain_01a",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_01a.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_01b";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_01b";
{
tmp_speak.primary = false;
tmp_speak.wx = 76.9346213378118;
tmp_speak.wy = 367.20000148701513;
tmp_speak.w = 270.69814225923324;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hmmm. Wells sure is taking his time with that plaque…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.capitol.hall.boss.boss_chain_01b",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_01b.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_01c";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_01c";
{
tmp_speak.primary = false;
tmp_speak.wx = 174.43462133781077;
tmp_speak.wy = 322.2000014870106;
tmp_speak.w = 152.69814225923326;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Back so soon?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_01c.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_02";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_02";
{
tmp_speak.primary = false;
tmp_speak.wx = -129.90090138980202;
tmp_speak.wy = 374.70000148702;
tmp_speak.w = 323.69814225923324;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "He’s meeting me here. Said he had to take care of something first.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 239.216253647685;
tmp_speak.options_wy = 100.71702878373762;
tmp_speak.options_w = 146.9697885196375;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_03";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_03";
{
tmp_speak.primary = false;
tmp_speak.wx = -10.999999999910159;
tmp_speak.wy = 344.5000000003081;
tmp_speak.w = 224;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wells was wrong. It’s not a basketball jersey!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_04";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_04";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_04";
{
tmp_speak.primary = false;
tmp_speak.wx = 158.50000001387514;
tmp_speak.wy = 370.000000047556;
tmp_speak.w = 176;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh really? How do you know?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_04.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_05";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_05";
{
tmp_speak.primary = false;
tmp_speak.wx = -79.9999999999952;
tmp_speak.wy = 439.0000000000173;
tmp_speak.w = 336;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I checked the old jerseys at the basketball Center! The tunic looks totally different. And the women’s team didn’t even start until 1974.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_05.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_06";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_06";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_06";
{
tmp_speak.primary = false;
tmp_speak.wx = 167.50000000000006;
tmp_speak.wy = 367;
tmp_speak.w = 161;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Do you have any other leads?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_06.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_07";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_07";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_07";
{
tmp_speak.primary = false;
tmp_speak.wx = 28.00000000000007;
tmp_speak.wy = 341.5;
tmp_speak.w = 210;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Yes! I found this on the tunic.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_07.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_08";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_08";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_08";
{
tmp_speak.primary = false;
tmp_speak.wx = 215.50000000000006;
tmp_speak.wy = 367;
tmp_speak.w = 106;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Intriguing. What is it?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_08.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_09";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_09";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_09";
{
tmp_speak.primary = false;
tmp_speak.wx = 2.5000000000000355;
tmp_speak.wy = 308.5;
tmp_speak.w = 229;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "A dry cleaning receipt!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_09.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_10";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_10";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_10";
{
tmp_speak.primary = false;
tmp_speak.wx = 143.50000000000003;
tmp_speak.wy = 362.5;
tmp_speak.w = 182;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Who did the receipt belong to?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_10.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_11";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_11";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_11";
{
tmp_speak.primary = false;
tmp_speak.wx = 26.50000000000012;
tmp_speak.wy = 313;
tmp_speak.w = 182;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Theodora Youmans!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_11.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_12";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_12";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_12";
{
tmp_speak.primary = false;
tmp_speak.wx = 89.50000000000006;
tmp_speak.wy = 370;
tmp_speak.w = 220;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hmm. Sounds familiar. Who was she?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_12.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "boss_chain_13";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "boss_chain_13";
tmp_speak.fqid = "tunic.capitol.hall.boss.boss_chain_13";
{
tmp_speak.primary = false;
tmp_speak.wx = 58.00000000000012;
tmp_speak.wy = 296.4999999999999;
tmp_speak.w = 132;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "A suffragist!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.capitol.hall.boss.boss_chain_13.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.capitol.hall.toentry";
{
tmp_porthole.ww = 231.7272727272727;
tmp_porthole.wh = 378.6363636363637;
tmp_porthole.wx = 790.8636363636366;
tmp_porthole.wy = -71.22727272727273;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -140.9090909090909;
tmp_porthole.act_wy = -87.87878787878788;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 3.03030303030303;
tmp_porthole.hover_icon_wy = 62.12121212121212;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "rotunda";
tmp_inert.fqid = "tunic.capitol.hall.rotunda";
{
tmp_inert.ww = 1019.7274168712107;
tmp_inert.wh = 267.73319864195986;
tmp_inert.wx = 30.234019141953524;
tmp_inert.wy = -442.418249480281;
tmp_inert.wz = 999;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "capitol_rotunda";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "drycleaner";
tmp_scene.fqid = "tunic.drycleaner";
{
tmp_scene.primary = false;
tmp_scene.ww = 193.99999999999997;
tmp_scene.wh = 138;
tmp_scene.wx = 135.99999999999997;
tmp_scene.wy = 217.00000000000006;
tmp_scene.animcycle_id = "scene_drycleaner";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
"tunic.humanecology.frontdesk.drycleaners",
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.drycleaner.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1117.168784029038;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_drycleaner_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-2, wy:-197.99999999999997, ww:868, wh:244 },
];
tmp_room.lights = [
{wx:-2, wy:-197.99999999999997, ww:868, wh:244 },
];
tmp_room.shadows = [
{wx:-2, wy:-197.99999999999997, ww:868, wh:244 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 262.00011508808285;
tmp_room.target_start_wy = -142.99999999999994;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.drycleaner.frontdesk.worker";
{
tmp_person.ww = 230.99999999999991;
tmp_person.wh = 279;
tmp_person.wx = -129.4004012505804;
tmp_person.wy = 9.499999999999972;
tmp_person.wz = 0;
tmp_person.act_wx = 194.67917351796666;
tmp_person.act_wy = 20.999999999999996;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 64.95803294402975;
tmp_person.hover_icon_wy = 100.99999999999999;
tmp_person.animcycle_id = "cleaner";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "done";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.done";
{
tmp_speak.primary = 1;
tmp_speak.wx = -176.00002379661728;
tmp_speak.wy = 228.99999999999997;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Good luck!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.done.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.hub";
{
tmp_speak.primary = 2;
tmp_speak.wx = -113.86646775955367;
tmp_speak.wy = 261;
tmp_speak.w = 300.9942688897165;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "cleaner";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Welcome to Squeaky Cleaners! How can I help you?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 24.49999846531547;
tmp_speak.options_wy = 154;
tmp_speak.options_w = 229;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.drycleaner.frontdesk.worker.slip13",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "Nevermind!";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.hub.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I was just wondering…";
tmp_option.target_speak = "slip01";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip01";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip01";
{
tmp_speak.primary = false;
tmp_speak.wx = -145;
tmp_speak.wy = 287.99999999999994;
tmp_speak.w = 305;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I see the problem. Dirt, grass stains, ice cream. You need the heavy-duty wash.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip02";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip02";
{
tmp_speak.primary = false;
tmp_speak.wx = 16.00000000000001;
tmp_speak.wy = 199;
tmp_speak.w = 211;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "No thanks. I need to figure out who this slip belonged to.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip03";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip03";
{
tmp_speak.primary = false;
tmp_speak.wx = -158.00000000000006;
tmp_speak.wy = 264;
tmp_speak.w = 256;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh… well… I can't show our log books to just anybody.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 27.00000000000002;
tmp_speak.options_wy = 171.99999999999997;
tmp_speak.options_w = 312;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "please1";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip03.please1";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? I won't tell anybody!";
tmp_option.target_speak = "slip04";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "please2";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip03.please2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? It's for my Grampa Leo… he's a historian.";
tmp_option.target_speak = "slip05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip04";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip04";
{
tmp_speak.primary = false;
tmp_speak.wx = -173;
tmp_speak.wy = 249;
tmp_speak.w = 227;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Sorry. Rules are rules.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 27.00000000000002;
tmp_speak.options_wy = 168.99999999999994;
tmp_speak.options_w = 313;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "please2";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip04.please2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Please? It's for my Grampa Leo… he's a historian.";
tmp_option.target_speak = "slip05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip05";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip05";
{
tmp_speak.primary = false;
tmp_speak.wx = -172;
tmp_speak.wy = 264.99999999999994;
tmp_speak.w = 159;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Leo… you don't mean Leopold?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip05.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip06";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip06";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip06";
{
tmp_speak.primary = false;
tmp_speak.wx = 14.000000000000007;
tmp_speak.wy = 136.99999999999997;
tmp_speak.w = 159;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Yep, that's him.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip06.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip07";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip07";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip07";
{
tmp_speak.primary = false;
tmp_speak.wx = -199;
tmp_speak.wy = 267.99999999999994;
tmp_speak.w = 353;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Your gramps is my favorite customer! Always full of stories. Poor guy…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip07.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip08";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip08";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip08";
{
tmp_speak.primary = false;
tmp_speak.wx = 13.000000000000007;
tmp_speak.wy = 128.00000000000003;
tmp_speak.w = 197;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What do you mean?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip08.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip09";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip09";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip09";
{
tmp_speak.primary = false;
tmp_speak.wx = -198;
tmp_speak.wy = 273;
tmp_speak.w = 275;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "He came in last week. I found this in his jacket pocket.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip09.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip10";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip10";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip10";
{
tmp_speak.primary = false;
tmp_speak.wx = 9.000000000000004;
tmp_speak.wy = 183.99999999999994;
tmp_speak.w = 294;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "… Missing paperwork? This doesn't make sense! Grampa's always so careful with his work.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip10.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip11";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip11";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip11";
{
tmp_speak.primary = false;
tmp_speak.wx = -178;
tmp_speak.wy = 269;
tmp_speak.w = 188;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Guess he's losing track of things.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip11.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip12";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip12";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip12";
{
tmp_speak.primary = false;
tmp_speak.wx = 11.000000000000005;
tmp_speak.wy = 161.99999999999997;
tmp_speak.w = 218;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "If I don't figure this out, he could lose his job!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip12.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "slip13";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip13";
tmp_speak.fqid = "tunic.drycleaner.frontdesk.worker.slip13";
{
tmp_speak.primary = false;
tmp_speak.wx = -198;
tmp_speak.wy = 285.99999999999994;
tmp_speak.w = 190;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Here's the log book. Go ahead, take a peek.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.drycleaner.frontdesk.worker.slip13.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "logbook";
tmp_object.fqid = "tunic.drycleaner.frontdesk.logbook";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 66.00000000000001;
tmp_object.wy = 100;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "logbook";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
"tunic.drycleaner.frontdesk.worker.slip13",
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.drycleaner.frontdesk.logbook.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "logbook_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"Aha! It was owned by Theodora Youmans. I should ask the archivist about this!",
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.drycleaner.frontdesk.toentry";
{
tmp_porthole.ww = 771;
tmp_porthole.wh = 88;
tmp_porthole.wx = 52.5;
tmp_porthole.wy = -281;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "historicalsociety";
tmp_scene.fqid = "tunic.historicalsociety";
{
tmp_scene.primary = true;
tmp_scene.ww = 238.99999999999997;
tmp_scene.wh = 144.00000000000003;
tmp_scene.wx = -190.5000000000001;
tmp_scene.wy = 220.99999999999994;
tmp_scene.animcycle_id = "scene_historicalsociety";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "basement";
tmp_room.fqid = "tunic.historicalsociety.basement";
{
tmp_room.primary = false;
tmp_room.ww = 1000;
tmp_room.wh = 680;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_hallway";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-15.409090909090821, wy:-146.7272727272725, ww:794.2727272727274, wh:410.00000000000017 },
];
tmp_room.lights = [
{wx:340, wy:242.5, ww:51.99999999999998, wh:24.999999999999993 },
];
tmp_room.shadows = [
{wx:5.954545454545325, wy:-277.3999999999997, ww:871, wh:161.99999999999997 },
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = -300;
tmp_room.target_start_wy = -77.00000000000001;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocloset";
{
tmp_porthole.ww = 140.54545454545473;
tmp_porthole.wh = 222.18181818181822;
tmp_porthole.wx = 129.69795344466908;
tmp_porthole.wy = 117.2715424956355;
tmp_porthole.wz = -0.9;
tmp_porthole.act_wx = 3;
tmp_porthole.act_wy = -76;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 25;
tmp_porthole.hover_icon_wy = 74;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "closet";
tmp_porthole.target_start_wx = -374.75951624996645;
tmp_porthole.target_start_wy = -34.4078948742569;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tocloset_dirty";
tmp_porthole.fqid = "tunic.historicalsociety.basement.tocloset_dirty";
{
tmp_porthole.ww = 140.5454545454546;
tmp_porthole.wh = 222.18181818181822;
tmp_porthole.wx = 127.7272727004599;
tmp_porthole.wy = 118.09090908982567;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 4;
tmp_porthole.act_wy = -76;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 26;
tmp_porthole.hover_icon_wy = 72;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "closet_dirty";
tmp_porthole.target_start_wx = -374.75951624996645;
tmp_porthole.target_start_wy = -34.4078948742569;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.basement.toentry";
{
tmp_porthole.ww = 126.54545454545456;
tmp_porthole.wh = 554.4545454545454;
tmp_porthole.wx = -455.27272727272987;
tmp_porthole.wy = 71.86363636363643;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 32;
tmp_porthole.act_wy = -130;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 59;
tmp_porthole.hover_icon_wy = -3;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 581.1727590073484;
tmp_porthole.target_start_wy = -3.124616842446756;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.basement.fgpipes";
{
tmp_inert.ww = 1008.9370390464723;
tmp_inert.wh = 914.0043171567542;
tmp_inert.wx = -32.18309946356959;
tmp_inert.wy = 42.28041040300866;
tmp_inert.wz = 999;
tmp_inert.g = 0.4;
tmp_inert.animcycle_id = "fgpipes";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "closet";
tmp_room.fqid = "tunic.historicalsociety.closet";
{
tmp_room.primary = false;
tmp_room.ww = 2134.4544349939247;
tmp_room.wh = 792;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_closet";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-374.79431084122393, wy:-113.2998170346518, ww:211.86808265684846, wh:240.3455245259692 },
{wx:-118.55473324394916, wy:-223.7356130025576, ww:2033.1000861592847, wh:226.6862476527108 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
{wx:943.0457915933541, wy:-146.67414349544742, ww:198.0771365697986, wh:459.98419283740435 },
{wx:-948.0429452590882, wy:-70.49091146868366, ww:149.78539483522562, wh:427.22621485165007 },
{wx:72.03004853348523, wy:-151.83534632269135, ww:200.31107256569817, wh:430.8939187065737 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -279.4194896719319;
tmp_room.target_start_wy = -143.99999999999997;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "intro";
tmp_cutscene.fqid = "tunic.historicalsociety.closet.intro";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 10;
tmp_cutscene.wh = 10;
tmp_cutscene.wx = 10;
tmp_cutscene.wy = 10;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 400;
tmp_cutscene_command.wy = -200;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "gramps";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -353.9914052226322;
tmp_cutscene_command.wy = 4.685313829772184;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = -1;
tmp_cutscene_command.end_t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_WAIT;
tmp_cutscene_command.t = -1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 1;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 336.1178252794906;
tmp_cutscene_command.wy = -45.7487331224705;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 2;
tmp_cutscene_command.end_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "teddy";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 8;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 10;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.closet.gramps";
{
tmp_person.ww = 176.99999935560783;
tmp_person.wh = 343.9999890712546;
tmp_person.wx = -423.82473587498396;
tmp_person.wy = 18.755278900937242;
tmp_person.wz = 1;
tmp_person.act_wx = 137.58904854645314;
tmp_person.act_wy = -113.1608805092052;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.closet.gramps.intro_0_cs_5",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0";
{
tmp_speak.primary = 1;
tmp_speak.wx = -359;
tmp_speak.wy = 249;
tmp_speak.w = 283;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...and then, the Eagle Company marched off to battle,";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_1";
{
tmp_speak.primary = false;
tmp_speak.wx = -362.00000000000006;
tmp_speak.wy = 296;
tmp_speak.w = 213;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...and Old Abe became the most famous soldier in the Union!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_2";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_2";
{
tmp_speak.primary = false;
tmp_speak.wx = -142.99999999999994;
tmp_speak.wy = -37.000000000000014;
tmp_speak.w = 205;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wow! An eagle in the army?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_3";
{
tmp_speak.primary = false;
tmp_speak.wx = -149.6655164034023;
tmp_speak.wy = -31.98848116646402;
tmp_speak.w = 203;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What happened next?!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = -285.0787849331714;
tmp_speak.options_wy = 71.91061968408266;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_4";
{
tmp_speak.primary = false;
tmp_speak.wx = -359.8442770352371;
tmp_speak.wy = 221.45842041312287;
tmp_speak.w = 20;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -304.576136087485;
tmp_speak.options_wy = -68.81594167679211;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_5";
{
tmp_speak.primary = false;
tmp_speak.wx = -356.9504738760633;
tmp_speak.wy = 249.88850546780083;
tmp_speak.w = 282;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'll have to tell you the rest later- or I'll be late to my meeting!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -330.7717132442285;
tmp_speak.options_wy = 1.0389307411907944;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_6";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_6";
tmp_speak.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_6";
{
tmp_speak.primary = false;
tmp_speak.wx = -360.7265613608749;
tmp_speak.wy = 249.2628432563792;
tmp_speak.w = 172;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Grab your stuff and meet me upstairs!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.gramps.intro_0_cs_6.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "teddy";
tmp_person.fqid = "tunic.historicalsociety.closet.teddy";
{
tmp_person.ww = 117.17960669467911;
tmp_person.wh = 66.03035396647023;
tmp_person.wx = 519.952742113279;
tmp_person.wy = -163.06261370005947;
tmp_person.wz = 0;
tmp_person.act_wx = -120.0008846143378;
tmp_person.act_wy = -63.00001416167618;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 15.698336603845403;
tmp_person.hover_icon_wy = 38.99514199514027;
tmp_person.animcycle_id = "teddy";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_0";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0";
{
tmp_speak.primary = 10;
tmp_speak.wx = 132.13159507828425;
tmp_speak.wy = -43.99510699953347;
tmp_speak.w = 239;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Teddy, please stay hidden!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.closet.teddy.intro_0_cs_0",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_1";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_1";
{
tmp_speak.primary = false;
tmp_speak.wx = 186.48008999415615;
tmp_speak.wy = -9.978884071925954;
tmp_speak.w = 183;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You're not supposed to be here-";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 166.00000170519166;
tmp_speak.options_wy = -126.99999911049399;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_2";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_2";
{
tmp_speak.primary = false;
tmp_speak.wx = 213.87791314612574;
tmp_speak.wy = -7.30177416656651;
tmp_speak.w = 152;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "But don't worry, I'll be back soon.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 201.8716889428919;
tmp_speak.options_wy = -161.95577156743605;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_3";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_3";
{
tmp_speak.primary = false;
tmp_speak.wx = 503.8053463021331;
tmp_speak.wy = -48.413268530215525;
tmp_speak.w = 40;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -285.0787849331714;
tmp_speak.options_wy = 71.91061968408266;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_4";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_4";
{
tmp_speak.primary = false;
tmp_speak.wx = 191.60354799515318;
tmp_speak.wy = -9.50264884568709;
tmp_speak.w = 176;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Now where did I put my notebook...?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = -304.576136087485;
tmp_speak.options_wy = -68.81594167679211;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_0_cs_5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0_cs_5";
tmp_speak.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_5";
{
tmp_speak.primary = 1;
tmp_speak.wx = 503.99470230862664;
tmp_speak.wy = -54.625662211421684;
tmp_speak.w = 117;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "ZZZZzzzzz...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -330.7717132442285;
tmp_speak.options_wy = 1.0389307411907944;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet.teddy.intro_0_cs_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "notebook";
tmp_object.fqid = "tunic.historicalsociety.closet.notebook";
{
tmp_object.ww = 99.99999999999999;
tmp_object.wh = 99.99999999999999;
tmp_object.wx = -906.1699383473281;
tmp_object.wy = -261.8594471586292;
tmp_object.wz = 0.12;
tmp_object.act_wx = 63;
tmp_object.act_wy = 7;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 35.84897967830983;
tmp_object.hover_icon_wy = 43.00093435578584;
tmp_object.animcycle_id = "notebook_object";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
"Here's my notebook!",
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.notebook.hub";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "notebook";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "retirement_letter";
tmp_object.fqid = "tunic.historicalsociety.closet.retirement_letter";
{
tmp_object.ww = 75.96120312606216;
tmp_object.wh = 43.70875183001083;
tmp_object.wx = -602.2304427458864;
tmp_object.wy = -32.13363429074393;
tmp_object.wz = 0.11;
tmp_object.act_wx = -61.12301336573512;
tmp_object.act_wy = -32.01681652490887;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 33.63053029083767;
tmp_object.hover_icon_wy = 26.87826993962551;
tmp_object.animcycle_id = "retirement_letter";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.closet.retirement_letter.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "retirement_letter_closeup";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"Oh no! Retirement? That's not fair!",
"Grampa loves this place!",
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_observation = new observation();
tmp_observation.id = "doorblock";
tmp_observation.fqid = "tunic.historicalsociety.closet.doorblock";
{
tmp_observation.ww = 192.99999999922755;
tmp_observation.wh = 312.99999999997175;
tmp_observation.wx = -353.5349141682593;
tmp_observation.wy = 147.05942951322734;
tmp_observation.wz = 0.1;
tmp_observation.act_wx = -13.999999999999998;
tmp_observation.act_wy = -71;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 17.04946868792308;
tmp_observation.hover_icon_wy = 55.99791017800129;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I feel like I'm forgetting something...";
tmp_observation.blip_wx = -319.39018232082714;
tmp_observation.blip_wy = 164.00019803198495;
tmp_observation.blip_w = 316;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "photo";
tmp_observation.fqid = "tunic.historicalsociety.closet.photo";
{
tmp_observation.ww = 242.5221929444906;
tmp_observation.wh = 164.0023109162744;
tmp_observation.wx = 465.67784975346535;
tmp_observation.wy = -49.05610468928902;
tmp_observation.wz = 0;
tmp_observation.act_wx = -107.51714131069957;
tmp_observation.act_wy = -129.10494391114588;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 63.95945286875973;
tmp_observation.hover_icon_wy = 41.970690791400216;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I love these photos of me and Teddy.";
tmp_observation.blip_wx = 236.38354274260067;
tmp_observation.blip_wy = 62.37115888408396;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tobasement";
tmp_porthole.fqid = "tunic.historicalsociety.closet.tobasement";
{
tmp_porthole.ww = 183.0013270648818;
tmp_porthole.wh = 304.9987868792919;
tmp_porthole.wx = -354.2595672433551;
tmp_porthole.wy = 146.62020075243996;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999996;
tmp_porthole.target_start_wy = 31.000000000000018;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "chair";
tmp_inert.fqid = "tunic.historicalsociety.closet.chair";
{
tmp_inert.ww = 288.7991253327396;
tmp_inert.wh = 291.62036450312695;
tmp_inert.wx = -154.6498065812714;
tmp_inert.wy = -40.670959022911916;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_chair";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "desk";
tmp_inert.fqid = "tunic.historicalsociety.closet.desk";
{
tmp_inert.ww = 397.1093170356074;
tmp_inert.wh = 309.30835246805276;
tmp_inert.wx = -716.9152300534219;
tmp_inert.wy = -59.238045156760066;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_desk";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgdesk";
tmp_inert.fqid = "tunic.historicalsociety.closet.fgdesk";
{
tmp_inert.ww = 737.4257108140947;
tmp_inert.wh = 155.30177399756974;
tmp_inert.wx = -547.6128797083838;
tmp_inert.wy = -320.58454434993905;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgdesk";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.closet.fgpipes";
{
tmp_inert.ww = 917.8841312272183;
tmp_inert.wh = 853.8504981773996;
tmp_inert.wx = 584.561579617127;
tmp_inert.wy = 38.4489603959309;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgpipes";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "closet_dirty";
tmp_room.fqid = "tunic.historicalsociety.closet_dirty";
{
tmp_room.primary = false;
tmp_room.ww = 2134.4544349939247;
tmp_room.wh = 792;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_closet_dirty";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-374.79431084122393, wy:-113.2998170346518, ww:211.86808265684846, wh:240.3455245259692 },
{wx:-118.55473324394916, wy:-223.7356130025576, ww:2033.1000861592847, wh:226.6862476527108 },
];
tmp_room.lights = [
];
tmp_room.shadows = [
{wx:943.0457915933541, wy:-146.67414349544742, ww:198.0771365697986, wh:459.98419283740435 },
{wx:-948.0429452590882, wy:-70.49091146868366, ww:149.78539483522562, wh:427.22621485165007 },
{wx:72.03004853348523, wy:-151.83534632269135, ww:200.31107256569817, wh:430.8939187065737 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -279.4194896719319;
tmp_room.target_start_wy = -143.99999999999997;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "trigger_coffee";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.trigger_coffee";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 100;
tmp_cutscene.wh = 100;
tmp_cutscene.wx = 10;
tmp_cutscene.wy = 10;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
];

tmp_cutscene.commands = [];

/*
Possible Commands:

CUTSCENE_COMMAND_CREATE
CUTSCENE_COMMAND_DESTROY
CUTSCENE_COMMAND_ANIMATE
CUTSCENE_COMMAND_SPEAK
CUTSCENE_COMMAND_ACT
CUTSCENE_COMMAND_AUDIO
CUTSCENE_COMMAND_TWEEN
CUTSCENE_COMMAND_TARGET
CUTSCENE_COMMAND_WAIT
CUTSCENE_COMMAND_END
CUTSCENE_COMMAND_IGNORE


Possible Entity Types:
CUTSCENE_ENTITY_CAMERA
CUTSCENE_ENTITY_AVATAR
CUTSCENE_ENTITY_SCENE
CUTSCENE_ENTITY_CUTSCENE
*/

/*
//skeleton command addition
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_NULL;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene_command.ww = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wh = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wx = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wy = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wz = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.w = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.h = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "";
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.audio_id = "null";
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
*/

//Leave this at the end- remember to set tmp_cutscene_command.t!
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "trigger_scarf";
tmp_cutscene.fqid = "tunic.historicalsociety.closet_dirty.trigger_scarf";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 100;
tmp_cutscene.wh = 100;
tmp_cutscene.wx = 10;
tmp_cutscene.wy = 10;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
];

tmp_cutscene.commands = [];

/*
Possible Commands:

CUTSCENE_COMMAND_CREATE
CUTSCENE_COMMAND_DESTROY
CUTSCENE_COMMAND_ANIMATE
CUTSCENE_COMMAND_SPEAK
CUTSCENE_COMMAND_ACT
CUTSCENE_COMMAND_AUDIO
CUTSCENE_COMMAND_TWEEN
CUTSCENE_COMMAND_TARGET
CUTSCENE_COMMAND_WAIT
CUTSCENE_COMMAND_END
CUTSCENE_COMMAND_IGNORE


Possible Entity Types:
CUTSCENE_ENTITY_CAMERA
CUTSCENE_ENTITY_AVATAR
CUTSCENE_ENTITY_SCENE
CUTSCENE_ENTITY_CUTSCENE
*/

/*
//skeleton command addition
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_NULL;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 0;
tmp_cutscene_command.ww = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wh = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wx = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wy = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.wz = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.w = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.h = CUTSCENE_COMMAND_IGNORE;
tmp_cutscene_command.raw_text = "";
tmp_cutscene_command.animcycle_id = "null";
tmp_cutscene_command.audio_id = "null";
tmp_cutscene_command.animcycle_offset_t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
*/

//Leave this at the end- remember to set tmp_cutscene_command.t!
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.closet_dirty.gramps";
{
tmp_person.ww = 176.99999935560783;
tmp_person.wh = 343.9999890712546;
tmp_person.wx = -750.2200051306169;
tmp_person.wy = -91.95401594936837;
tmp_person.wz = 1;
tmp_person.act_wx = 137.58904854645314;
tmp_person.act_wy = -113.1608805092052;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.closet.gramps.intro_0_cs_5",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "main1";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.main1";
{
tmp_speak.primary = false;
tmp_speak.wx = -624.4929769137303;
tmp_speak.wy = 46.90532199270974;
tmp_speak.w = 164;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Yikes. What happened here?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.main1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "main2";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "main2";
tmp_speak.fqid = "tunic.historicalsociety.closet_dirty.gramps.main2";
{
tmp_speak.primary = false;
tmp_speak.wx = -810.9903499677257;
tmp_speak.wy = 216.8548703987459;
tmp_speak.w = 254;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "The Wisconsin Wonders paperwork… It's gone!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.closet_dirty.gramps.main2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "coffeecup";
tmp_observation.fqid = "tunic.historicalsociety.closet_dirty.coffeecup";
{
tmp_observation.ww = 80.99342279216228;
tmp_observation.wh = 71.00029447787803;
tmp_observation.wx = -0.6663785670119751;
tmp_observation.wy = -202.77993103529144;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -23.281753587978585;
tmp_observation.hover_icon_wy = -27.10215975707908;
tmp_observation.animcycle_id = "coffeecup";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "Is this yours, Grampa?";
tmp_observation.blip_wx = -101.4934715985558;
tmp_observation.blip_wy = 6.0266875311798245;
tmp_observation.blip_w = 227;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "doorblock";
tmp_observation.fqid = "tunic.historicalsociety.closet_dirty.doorblock";
{
tmp_observation.ww = 192.99999999922755;
tmp_observation.wh = 312.99999999997175;
tmp_observation.wx = -353.5349141682593;
tmp_observation.wy = 147.05942951322734;
tmp_observation.wz = 0.1;
tmp_observation.act_wx = -13.999999999999998;
tmp_observation.act_wy = -71;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 17.04946868792308;
tmp_observation.hover_icon_wy = 55.99791017800129;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I feel like I'm forgetting something...";
tmp_observation.blip_wx = -319.39018232082714;
tmp_observation.blip_wy = 164.00019803198495;
tmp_observation.blip_w = 316;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.closet.notebook",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "photo";
tmp_observation.fqid = "tunic.historicalsociety.closet_dirty.photo";
{
tmp_observation.ww = 242.5221929444906;
tmp_observation.wh = 164.0023109162744;
tmp_observation.wx = 465.67784975346535;
tmp_observation.wy = -49.05610468928902;
tmp_observation.wz = 0;
tmp_observation.act_wx = -107.51714131069957;
tmp_observation.act_wy = -129.10494391114588;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 63.95945286875973;
tmp_observation.hover_icon_wy = 41.970690791400216;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I love these photos of me and Teddy.";
tmp_observation.blip_wx = 236.38354274260067;
tmp_observation.blip_wy = 62.37115888408396;
tmp_observation.blip_w = 175;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "scarf";
tmp_observation.fqid = "tunic.historicalsociety.closet_dirty.scarf";
{
tmp_observation.ww = 101.42205127979476;
tmp_observation.wh = 63.803494135112985;
tmp_observation.wx = 526.6710542594461;
tmp_observation.wy = -165.13131865706274;
tmp_observation.wz = 0;
tmp_observation.act_wx = 81.12909904618942;
tmp_observation.act_wy = 40.02207172547418;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -10.417556825988527;
tmp_observation.hover_icon_wy = 23.98785932808255;
tmp_observation.animcycle_id = "scarf";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "Oh no… Teddy's scarf!";
tmp_observation.blip_wx = 495.58271142232536;
tmp_observation.blip_wy = 68.67927468268624;
tmp_observation.blip_w = 240;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tobasement";
tmp_porthole.fqid = "tunic.historicalsociety.closet_dirty.tobasement";
{
tmp_porthole.ww = 183.0013270648818;
tmp_porthole.wh = 304.9987868792919;
tmp_porthole.wx = -354.2595672433551;
tmp_porthole.wy = 146.62020075243996;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = 107.99999999999996;
tmp_porthole.target_start_wy = 31.000000000000018;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "chair";
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.chair";
{
tmp_inert.ww = 288.7991253327396;
tmp_inert.wh = 291.62036450312695;
tmp_inert.wx = -187.6692620820057;
tmp_inert.wy = -26.41218718451732;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_dirty_chair";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "desk";
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.desk";
{
tmp_inert.ww = 372.77620325031677;
tmp_inert.wh = 306.648311065679;
tmp_inert.wx = -729.0817869460672;
tmp_inert.wy = -57.90802445557321;
tmp_inert.wz = 0.1;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "room_historicalsociety_closet_dirty_desk";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgdesk";
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fgdesk";
{
tmp_inert.ww = 737.4257108140947;
tmp_inert.wh = 155.30177399756974;
tmp_inert.wx = -547.6128797083838;
tmp_inert.wy = -320.58454434993905;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgdesk";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgpipes";
tmp_inert.fqid = "tunic.historicalsociety.closet_dirty.fgpipes";
{
tmp_inert.ww = 917.8841312272183;
tmp_inert.wh = 853.8504981773996;
tmp_inert.wx = 584.74876318705;
tmp_inert.wy = 39.64786873874294;
tmp_inert.wz = 999;
tmp_inert.g = 0.2;
tmp_inert.animcycle_id = "room_historicalsociety_closet_fgpipes";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "collection";
tmp_room.fqid = "tunic.historicalsociety.collection";
{
tmp_room.primary = false;
tmp_room.ww = 1626.7701863354039;
tmp_room.wh = 990;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_collection";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 950;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:71.12826086956488, wy:-241.2801242236024, ww:1187.7378881987577, wh:470.5999999999999 },
];
tmp_room.lights = [
{wx:643.3423913043476, wy:341.0999999999999, ww:58.32826086956502, wh:55.39999999999993 },
];
tmp_room.shadows = [
{wx:570.895652173913, wy:351.6000000000001, ww:67.99999999999962, wh:60.799999999999976 },
];
tmp_room.light_color = "rgba(255,255,255,0.2);";
tmp_room.shadow_color = "rgba(0,0,0,0.5);";
tmp_room.ambient_color = "rgba(0,0,0,0);";
tmp_room.target_start_wx = 58.79999999999998;
tmp_room.target_start_wy = -212.4;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "cs";
tmp_cutscene.fqid = "tunic.historicalsociety.collection.cs";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_AUTO;
tmp_cutscene.ww = 100;
tmp_cutscene.wh = 100;
tmp_cutscene.wx = 10;
tmp_cutscene.wy = 10;
tmp_cutscene.wz = 0;
tmp_cutscene.act_wx = 0;
tmp_cutscene.act_wy = 0;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 0;
tmp_cutscene.hover_icon_wy = 0;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -372.12121212121207;
tmp_cutscene_command.wy = 282.8030303030303;
tmp_cutscene_command.w = 117;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wow! It's the bee's knees!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_NULL;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 200;
tmp_cutscene_command.wy = -100;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TARGET;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_CAMERA;
tmp_cutscene_command.cutscene_target_entity_id = "null";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = 166.26161336463082;
tmp_cutscene_command.wy = -8.077989127665601;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 0;
tmp_cutscene_command.end_t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 230.98484848484856;
tmp_cutscene_command.wy = 144.621212121212;
tmp_cutscene_command.w = 169;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Looks like a boring old shirt to me...";
tmp_cutscene_command.t = 100;
tmp_cutscene.commands.push(tmp_cutscene_command);
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 101;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.collection.gramps";
{
tmp_person.ww = 189.24285888530645;
tmp_person.wh = 354.77272727272725;
tmp_person.wx = -159.07506881375969;
tmp_person.wy = -11.553030303030312;
tmp_person.wz = 0;
tmp_person.act_wx = 245.29136436273882;
tmp_person.act_wy = -41.78567838584007;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = -54.69696969637356;
tmp_person.hover_icon_wy = 155.45454545454547;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_icon_animcycle_id = "null";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "found_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.found_0";
{
tmp_speak.primary = 5;
tmp_speak.wx = -402.3484848484849;
tmp_speak.wy = 284.24242424242425;
tmp_speak.w = 141;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hey, what'd you find there, Jo?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
"tunic.historicalsociety.collection.tunic.slip",
];
tmp_speak.relocks = [
"tunic.historicalsociety.collection.gramps.found_0",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "found_1";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "found_1";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.found_1";
{
tmp_speak.primary = false;
tmp_speak.wx = 117.27272727272737;
tmp_speak.wy = 182.04545454545456;
tmp_speak.w = 171;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Not sure- looks like it's from 1916...";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 222.34848484848501;
tmp_speak.options_wy = -105.83333333333326;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "found_2";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "found_2";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.found_2";
{
tmp_speak.primary = false;
tmp_speak.wx = -484.39393939393943;
tmp_speak.wy = 282.8030303030303;
tmp_speak.w = 198;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hot Dog! That's a clue if I've ever seen one!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "found_3";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "found_3";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.found_3";
{
tmp_speak.primary = 2;
tmp_speak.wx = 121.5909090909092;
tmp_speak.wy = 138.86363636363637;
tmp_speak.w = 143;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "So... now what?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 245.37878787878805;
tmp_speak.options_wy = -104.39393939393936;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "aheadofthegame";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_3.aheadofthegame";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_0";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
"tunic.kohlcenter.halloffame.oldpictures"
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.found_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "leads_0";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
"tunic.kohlcenter.halloffame.oldpictures"
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_0";
{
tmp_speak.primary = 10;
tmp_speak.wx = -423.9704776141978;
tmp_speak.wy = 281.3670931295611;
tmp_speak.w = 157;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I read that report- hogwash.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.collection.gramps.intro_0",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.intro_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_1";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_1";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_1";
{
tmp_speak.primary = false;
tmp_speak.wx = -409.5454545469995;
tmp_speak.wy = 282.803030303202;
tmp_speak.w = 147;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "If only I had time to investigate...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 125.90909090909102;
tmp_speak.options_wy = 134.54545454545456;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.intro_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_2";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_2";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_2";
{
tmp_speak.primary = false;
tmp_speak.wx = 117.27079781062476;
tmp_speak.wy = 179.16689680907137;
tmp_speak.w = 128;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I can help you grampa!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.intro_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_3";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_3";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_3";
{
tmp_speak.primary = false;
tmp_speak.wx = 121.5909090902827;
tmp_speak.wy = 176.2878787879535;
tmp_speak.w = 179;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "History, shmistory... How hard can it be?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.intro_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_4";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_4";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_4";
{
tmp_speak.primary = false;
tmp_speak.wx = -475.7575757575758;
tmp_speak.wy = 324.54545454545456;
tmp_speak.w = 192;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "If I had time, I'd skedaddle over to the Basketball Center.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.intro_4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_5";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_5";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_5";
{
tmp_speak.primary = false;
tmp_speak.wx = -387.9545454545455;
tmp_speak.wy = 281.3636363636364;
tmp_speak.w = 129;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Check out Well's theory...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.intro_5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro_6";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro_6";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.intro_6";
{
tmp_speak.primary = false;
tmp_speak.wx = -435.45454545454544;
tmp_speak.wy = 282.8030303030303;
tmp_speak.w = 166;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Anyways- let's look at this beauty.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.intro_6.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "lead_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.lead_0";
{
tmp_speak.primary = false;
tmp_speak.wx = -482.95454545454544;
tmp_speak.wy = 324.54545454545456;
tmp_speak.w = 197;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I see you've already done some work at the Basketball Center,";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.lead_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_1";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "lead_1";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.lead_1";
{
tmp_speak.primary = false;
tmp_speak.wx = -501.6666666666666;
tmp_speak.wy = 281.3636363636364;
tmp_speak.w = 209;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "So next, I'd ask the archivist about this slip-";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.lead_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_2";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "lead_2";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.lead_2";
{
tmp_speak.primary = false;
tmp_speak.wx = -373.56060606060606;
tmp_speak.wy = 282.8030303030303;
tmp_speak.w = 121;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "His office is right upstairs!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.lead_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "leads_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.leads_0";
{
tmp_speak.primary = false;
tmp_speak.wx = -346.2121212121212;
tmp_speak.wy = 284.24242424242425;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "We have two leads-";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.leads_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "leads_1";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "leads_1";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.leads_1";
{
tmp_speak.primary = false;
tmp_speak.wx = -480.07575757575756;
tmp_speak.wy = 324.54545454545456;
tmp_speak.w = 195;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You should check out the Basketball Center to test Well's theory,";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.leads_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "leads_2";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "leads_2";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.leads_2";
{
tmp_speak.primary = false;
tmp_speak.wx = -497.3484848484848;
tmp_speak.wy = 281.3636363636364;
tmp_speak.w = 209;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "And then I'd ask the archivist about this slip-";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.leads_2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "leads_3";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "leads_3";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.leads_3";
{
tmp_speak.primary = false;
tmp_speak.wx = -373.560606060606;
tmp_speak.wy = 284.24242424242425;
tmp_speak.w = 121;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "His office is right upstairs!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.leads_3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "look_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.look_0";
{
tmp_speak.primary = 5;
tmp_speak.wx = -438.3333333584987;
tmp_speak.wy = 281.3636363657549;
tmp_speak.w = 167;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You should have a look at the tunic!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.collection.gramps.look_0",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.look_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "look_1";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.look_1";
{
tmp_speak.primary = 4;
tmp_speak.wx = -464.2424242424242;
tmp_speak.wy = 324.54545454545456;
tmp_speak.w = 184;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "The first step in uncovering history is CLOSE inspection...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.collection.tunic.slip",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.look_1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "lost_0";
tmp_speak.fqid = "tunic.historicalsociety.collection.gramps.lost_0";
{
tmp_speak.primary = 3;
tmp_speak.wx = 115.61603186688953;
tmp_speak.wy = 141.74762384153541;
tmp_speak.w = 163;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What should I do?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = -396.59090920705773;
tmp_speak.options_wy = 30.909090911870123;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
"tunic.historicalsociety.collection.gramps.found_0",
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "aheadofthegame";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.lost_0.aheadofthegame";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "lead_0";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
"tunic.kohlcenter.halloffame.oldpictures"
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.collection.gramps.lost_0.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "leads_0";
tmp_option.audio_id = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
"tunic.kohlcenter.halloffame.oldpictures"
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "tunic";
tmp_object.fqid = "tunic.historicalsociety.collection.tunic";
{
tmp_object.ww = 137.78787878787867;
tmp_object.wh = 212.04545454545456;
tmp_object.wx = 7.617966210281686;
tmp_object.wy = 170.51545454545473;
tmp_object.wz = 0;
tmp_object.act_wx = 99.54719920102725;
tmp_object.act_wy = -29.687272727272703;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 48.93939393939394;
tmp_object.hover_icon_wy = 102.1969696969697;
tmp_object.animcycle_id = "null";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.collection.tunic.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "tunic_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "slip";
tmp_zone.fqid = "tunic.historicalsociety.collection.tunic.hub.slip";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = 59.00000000000002;
tmp_zone.wy = 194.99999999999994;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "slip";
tmp_zone.raw_notifications = [
];
tmp_zone.unlocks = [
];
tmp_zone.relocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
tmp_view = new view();
tmp_view.id = "slip";
tmp_view.fqid = "tunic.historicalsociety.collection.tunic.slip";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "tunic_slip";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
tmp_zone = new zone();
tmp_zone.id = "return";
tmp_zone.fqid = "tunic.historicalsociety.collection.tunic.slip.return";
{
tmp_zone.ww = 100;
tmp_zone.wh = 100;
tmp_zone.wx = 385.00000000000006;
tmp_zone.wy = 275;
tmp_zone.animcycle_id = "null";
tmp_zone.audio_id = "null";
tmp_zone.target_view = "hub";
tmp_zone.raw_notifications = [
];
tmp_zone.unlocks = [
];
tmp_zone.relocks = [
];

tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_zone.raw_notifications.length; i++) tmp_zone.notifications[i] = stextToLines(tmp_zone.raw_notifications[i], tmp_level.notifications_w);
}
tmp_view.zones.push(tmp_zone);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.collection.toentry";
{
tmp_porthole.ww = 153.87679637483404;
tmp_porthole.wh = 572.4719217920203;
tmp_porthole.wx = 687.3406850310062;
tmp_porthole.wy = -17.26626392631357;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -21.65419677812778;
tmp_porthole.act_wy = -114.22244306336432;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = -903.2438530313668;
tmp_porthole.target_start_wy = -94.39707135640161;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "dust";
tmp_inert.fqid = "tunic.historicalsociety.collection.dust";
{
tmp_inert.ww = 376.36219748078264;
tmp_inert.wh = 141.74109910378758;
tmp_inert.wx = 617.988778991006;
tmp_inert.wy = 296.6550520992953;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "fgdust";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgartifacts";
tmp_inert.fqid = "tunic.historicalsociety.collection.fgartifacts";
{
tmp_inert.ww = 1032.727272727273;
tmp_inert.wh = 180.60606060606062;
tmp_inert.wx = 115.83333333333354;
tmp_inert.wy = -409.54545454545456;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgartifacts";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "entry";
tmp_room.fqid = "tunic.historicalsociety.entry";
{
tmp_room.primary = true;
tmp_room.ww = 2529.910931174089;
tmp_room.wh = 1188;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_entry";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 1074.7199999999993;
tmp_room.nav_min_wz = 0.01;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-59.107017151491846, wy:-286.2998844146749, ww:1769.5494376878196, wh:580.1788249790067 },
];
tmp_room.lights = [
{wx:-904.7812513801985, wy:-112.84463746779527, ww:180.58030180345966, wh:176.24968715495018 },
];
tmp_room.shadows = [
{wx:739.604087455775, wy:-235.36991876942966, ww:534.5070793466381, wh:679.6472630265524 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 10.349635627530388;
tmp_room.target_start_wy = -548.64;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_cutscene = new cutscene();
tmp_cutscene.id = "groupconvo";
tmp_cutscene.fqid = "tunic.historicalsociety.entry.groupconvo";
{
tmp_cutscene.trigger = CUTSCENE_TRIGGER_ACT;
tmp_cutscene.ww = 564.0836363636361;
tmp_cutscene.wh = 492.4356363636362;
tmp_cutscene.wx = 132.94157900906043;
tmp_cutscene.wy = 51.52330233226783;
tmp_cutscene.wz = 1;
tmp_cutscene.act_wx = 273.2659952420667;
tmp_cutscene.act_wy = -96.10993403265934;
tmp_cutscene.act_anim = 0;
tmp_cutscene.hover_icon_wx = 87.64805366290636;
tmp_cutscene.hover_icon_wy = 213.94686296870225;
tmp_cutscene.animcycle_id = "null";
tmp_cutscene.hover_icon_animcycle_id = "null";
tmp_cutscene.raw_notifications = [
];
tmp_cutscene.unlocks = [
];
tmp_cutscene.relocks = [
"tunic.historicalsociety.entry.groupconvo",
];
tmp_cutscene.commands = [];
tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -271.706909090909;
tmp_cutscene_command.wy = 435.0029090909089;
tmp_cutscene_command.w = 201;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Ugh. Is this a museum or a daycare?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 358.46981818181814;
tmp_cutscene_command.wy = 408.94909090909067;
tmp_cutscene_command.w = 174;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Jolie, you can stay. As I was saying...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 358.46981818181814;
tmp_cutscene_command.wy = 408.94909090909067;
tmp_cutscene_command.w = 191;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Make sure the grand opening is perfect.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 358.46981818181814;
tmp_cutscene_command.wy = 408.94909090909067;
tmp_cutscene_command.w = 180;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Lots of important people will be there.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -328.69963636363616;
tmp_cutscene_command.wy = 435.002909090909;
tmp_cutscene_command.w = 237;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Hear that, Leo? Don't lose the paperwork this time.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 435.0029090909087;
tmp_cutscene_command.wy = 244.48436363636372;
tmp_cutscene_command.w = 196;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Wait a minute... Can't Grampa work on the exhibit too?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 368.2399999999999;
tmp_cutscene_command.wy = 363.35490909090885;
tmp_cutscene_command.w = 64;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Well...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "null";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_AVATAR;
tmp_cutscene_command.wx = 448.02981818181775;
tmp_cutscene_command.wy = 141.89745454545462;
tmp_cutscene_command.w = 136;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Pleeeeeease?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 371.4967272727273;
tmp_cutscene_command.wy = 361.7265454545452;
tmp_cutscene_command.w = 51;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Fine.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.61163636363636;
tmp_cutscene_command.wy = 415.46254545454525;
tmp_cutscene_command.w = 226;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "But finish the Wisconsin Wonders application first.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.6116363636364;
tmp_cutscene_command.wy = 459.4283636363634;
tmp_cutscene_command.w = 206;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "We need that grant, or I won't have the money to keep you both.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -356.38181818181783;
tmp_cutscene_command.wy = 262.3963636363635;
tmp_cutscene_command.w = 160;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "You can count on me, Boss!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "wells";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -445.9418181818179;
tmp_cutscene_command.wy = 412.20581818181796;
tmp_cutscene_command.w = 308;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "What?! He'll just slow me down! I already figured out the first artifact.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_ACT;
tmp_cutscene_command.cutscene_entity_id = "report";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_TWEEN;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.cutscene_target_entity_id = "tocollection";
tmp_cutscene_command.cutscene_target_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.ww = -927345892;
tmp_cutscene_command.wh = -927345892;
tmp_cutscene_command.wx = -921.9432388906349;
tmp_cutscene_command.wy = 21.407521837651274;
tmp_cutscene_command.wz = -927345892;
tmp_cutscene_command.t = 1;
tmp_cutscene_command.end_t = 300;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -335.21309090909074;
tmp_cutscene_command.wy = 268.90981818181814;
tmp_cutscene_command.w = 146;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Did you even talk to anybody?";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -445.9418181818179;
tmp_cutscene_command.wy = 229.82909090909087;
tmp_cutscene_command.w = 218;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "This isn't real research...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 368.2399999999998;
tmp_cutscene_command.wy = 452.9149090909089;
tmp_cutscene_command.w = 246;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "If you can prove him wrong, we'll be at the capitol getting things set up.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.6116363636362;
tmp_cutscene_command.wy = 407.32072727272714;
tmp_cutscene_command.w = 244;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Oh, and keep your eyes open for that pesky badger.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "boss";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = 366.6116363636362;
tmp_cutscene_command.wy = 405.6923636363635;
tmp_cutscene_command.w = 164;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "This is a museum, not a zoo...";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -261.9367272727271;
tmp_cutscene_command.wy = 270.5381818181817;
tmp_cutscene_command.w = 107;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Erm, sure thing, Boss.";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_SPEAK;
tmp_cutscene_command.cutscene_entity_id = "gramps";
tmp_cutscene_command.cutscene_entity_type = CUTSCENE_ENTITY_SCENE;
tmp_cutscene_command.wx = -406.86109090909065;
tmp_cutscene_command.wy = 273.794909090909;
tmp_cutscene_command.w = 198;
tmp_cutscene_command.h = 30;
tmp_cutscene_command.raw_text = "Come on, Jo! Let's go in and take a peek!";
tmp_cutscene_command.t = 0;
tmp_cutscene.commands.push(tmp_cutscene_command);

tmp_cutscene_command = new cutscene_command();
tmp_cutscene_command.command = CUTSCENE_COMMAND_END;
tmp_cutscene_command.t = 300;
tmp_cutscene.commands.push(tmp_cutscene_command);


tmp_cutscene.animcycle_inst = gen_animcycle_inst(tmp_cutscene.animcycle_id,tmp_level.animcycles);
tmp_cutscene.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_cutscene.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_cutscene.raw_notifications.length; i++) tmp_cutscene.notifications[i] = stextToLines(tmp_cutscene.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.cutscenes.push(tmp_cutscene);
tmp_person = new person();
tmp_person.id = "boss";
tmp_person.fqid = "tunic.historicalsociety.entry.boss";
{
tmp_person.ww = 166.762908720071;
tmp_person.wh = 345.88290909851037;
tmp_person.wx = 317.3865236070164;
tmp_person.wy = 95.92908700775376;
tmp_person.wz = 0;
tmp_person.act_wx = -99.3301816625064;
tmp_person.act_wy = -105.8436363572376;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 86.30329171979007;
tmp_person.hover_icon_wy = 182.37672805337078;
tmp_person.animcycle_id = "boss";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.collection",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.boss.hub";
{
tmp_speak.primary = false;
tmp_speak.wx = 350.8951714962277;
tmp_speak.wy = 419.15019736085225;
tmp_speak.w = 293;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I believe your grandpa is waiting for you in the collection room.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "hub";
tmp_option.fqid = "tunic.historicalsociety.entry.boss.hub.hub";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "gramps";
tmp_person.fqid = "tunic.historicalsociety.entry.gramps";
{
tmp_person.ww = 176.53309090909076;
tmp_person.wh = 337.7410909090905;
tmp_person.wx = -57.16530107597346;
tmp_person.wy = -33.52817409153707;
tmp_person.wz = 0.1;
tmp_person.act_wx = 0;
tmp_person.act_wy = 0;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 70.01963636363632;
tmp_person.hover_icon_wy = 149.80945454545446;
tmp_person.animcycle_id = "gramps";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.entry.groupconvo",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.gramps.hub";
{
tmp_speak.primary = false;
tmp_speak.wx = 100;
tmp_speak.wy = 100;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "null";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "hub";
tmp_option.fqid = "tunic.historicalsociety.entry.gramps.hub.hub";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "null";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_person = new person();
tmp_person.id = "wells";
tmp_person.fqid = "tunic.historicalsociety.entry.wells";
{
tmp_person.ww = 168.38664563697884;
tmp_person.wh = 358.9101377802236;
tmp_person.wx = 88.10886937368008;
tmp_person.wy = 109.88910983575497;
tmp_person.wz = 0;
tmp_person.act_wx = 87.93042270960882;
tmp_person.act_wy = -86.30340465538065;
tmp_person.act_anim = 1;
tmp_person.hover_icon_wx = 79.3474737500003;
tmp_person.hover_icon_wy = 166.78832837688685;
tmp_person.animcycle_id = "youngboy";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
"tunic.historicalsociety.collection",
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.historicalsociety.entry.wells.hub";
{
tmp_speak.primary = false;
tmp_speak.wx = -272.9491931680918;
tmp_speak.wy = 425.67371677073874;
tmp_speak.w = 201;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Why don't you go play with your Grandpa...";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "hub";
tmp_option.fqid = "tunic.historicalsociety.entry.wells.hub.hub";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_object = new object();
tmp_object.id = "report";
tmp_object.fqid = "tunic.historicalsociety.entry.report";
{
tmp_object.ww = 124.34743814082854;
tmp_object.wh = 127.70177174024397;
tmp_object.wx = 41.66996470938192;
tmp_object.wy = 55.02306303276724;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = 1;
tmp_object.hover_icon_wx = 37.452363636363614;
tmp_object.hover_icon_wy = 48.85090909090906;
tmp_object.animcycle_id = "report_hand";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
"tunic.historicalsociety.entry.groupconvo",
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "closeup";
tmp_view.fqid = "tunic.historicalsociety.entry.report.closeup";
{
tmp_view.primary = false;
tmp_view.animcycle_id = "report";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_observation = new observation();
tmp_observation.id = "block_tocollection";
tmp_observation.fqid = "tunic.historicalsociety.entry.block_tocollection";
{
tmp_observation.ww = 140.70831587224598;
tmp_observation.wh = 384.9636155470158;
tmp_observation.wx = -922.4110174303418;
tmp_observation.wy = 20.993361072063976;
tmp_observation.wz = 1;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I should see what Grampa is up to!";
tmp_observation.blip_wx = -779.3447514512408;
tmp_observation.blip_wy = 292.1489077359225;
tmp_observation.blip_w = 100;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.entry.groupconvo",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "block_tomap1";
tmp_observation.fqid = "tunic.historicalsociety.entry.block_tomap1";
{
tmp_observation.ww = 224.87620708397372;
tmp_observation.wh = 623.2132295249676;
tmp_observation.wx = 932.2124428494194;
tmp_observation.wy = 82.61398091566662;
tmp_observation.wz = 2;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I should see what Grampa is up to!";
tmp_observation.blip_wx = 541.9307841688642;
tmp_observation.blip_wy = 303.1715289017357;
tmp_observation.blip_w = 100;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.entry.groupconvo",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "block_tomap2";
tmp_observation.fqid = "tunic.historicalsociety.entry.block_tomap2";
{
tmp_observation.ww = 211.2842557213455;
tmp_observation.wh = 608.0459522137528;
tmp_observation.wx = 933.0382886267373;
tmp_observation.wy = 82.74899867824627;
tmp_observation.wz = 1;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "null";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I should go meet Grampa in the collection!";
tmp_observation.blip_wx = 543.0660865704943;
tmp_observation.blip_wy = 254.73248300464027;
tmp_observation.blip_w = 100;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
];
tmp_observation.relocks = [
"tunic.historicalsociety.collection",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tobasement";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tobasement";
{
tmp_porthole.ww = 355.54669929135713;
tmp_porthole.wh = 590.3083054640749;
tmp_porthole.wx = 603.8251613784361;
tmp_porthole.wy = 248.0542443995854;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = -48.29829959514169;
tmp_porthole.act_wy = -200.092955465587;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = -34.49878542510121;
tmp_porthole.hover_icon_wy = -100.0464777327935;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "basement";
tmp_porthole.target_start_wx = -371;
tmp_porthole.target_start_wy = -48.000000000000014;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tocollection";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tocollection";
{
tmp_porthole.ww = 125.42880725150671;
tmp_porthole.wh = 370.959272152761;
tmp_porthole.wx = -921.9432388906349;
tmp_porthole.wy = 21.407521837651274;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 7.948666912035332;
tmp_porthole.act_wy = -130.13163636363635;
tmp_porthole.act_anim = 1;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "null";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "null";
tmp_porthole.target_room = "collection";
tmp_porthole.target_start_wx = 621.9243073212195;
tmp_porthole.target_start_wy = -136.7670926438998;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomap";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tomap";
{
tmp_porthole.ww = 200.8052913823572;
tmp_porthole.wh = 595.6530910614567;
tmp_porthole.wx = 933.5624009371168;
tmp_porthole.wy = 82.07800314346377;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "map";
tmp_porthole.target_start_wx = -440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.historicalsociety.entry.tostacks";
{
tmp_porthole.ww = 404.61578072895446;
tmp_porthole.wh = 675.0683636504855;
tmp_porthole.wx = 197.14968599827517;
tmp_porthole.wy = 289.09932434259326;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 2.374022819286067;
tmp_porthole.act_wy = -335.06909090909085;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = -165.5941700404858;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
"tunic.historicalsociety.collection",
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgdust";
tmp_inert.fqid = "tunic.historicalsociety.entry.fgdust";
{
tmp_inert.ww = 1179.5969842368888;
tmp_inert.wh = 334.48455629843863;
tmp_inert.wx = -376.7094034420604;
tmp_inert.wy = 249.799638297336;
tmp_inert.wz = 0;
tmp_inert.g = 0.3;
tmp_inert.animcycle_id = "fgdust";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.historicalsociety.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1208.6968641114984;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 5;
tmp_room.nav_max_wz = 10;
tmp_room.navs = [
{wx:-38.3504355536046, wy:-202, ww:821.0001785495492, wh:223.99999999999997 },
];
tmp_room.lights = [
{wx:-451.0000000019295, wy:238.50000000000006, ww:158, wh:58.999999999999986 },
];
tmp_room.shadows = [
{wx:-432.5234022248209, wy:288.5, ww:96.9999978953515, wh:67 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 44.502020905923295;
tmp_room.target_start_wy = -171.6;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];
tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "archivist";
tmp_person.fqid = "tunic.historicalsociety.frontdesk.archivist";
{
tmp_person.ww = 97.00000021581084;
tmp_person.wh = 239.99999999999997;
tmp_person.wx = -40.503201494310744;
tmp_person.wy = 8.848222996515759;
tmp_person.wz = 3;
tmp_person.act_wx = 142.59470153053064;
tmp_person.act_wy = -49.00000000000001;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 18.99999921833438;
tmp_person.hover_icon_wy = 145;
tmp_person.animcycle_id = "archivist";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
"tunic.historicalsociety.collection.tunic.slip",
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "badger01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.badger01";
{
tmp_speak.primary = false;
tmp_speak.wx = -232.00000000000003;
tmp_speak.wy = 189.99999999999997;
tmp_speak.w = 229;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Sorry, no badgers here.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.badger01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.badger02";
{
tmp_speak.primary = false;
tmp_speak.wx = -47.000000000000036;
tmp_speak.wy = 108.99999999999997;
tmp_speak.w = 145;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Are you sure?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.badger02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger03";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.badger03";
{
tmp_speak.primary = false;
tmp_speak.wx = -205.00000000000003;
tmp_speak.wy = 231.99999999999994;
tmp_speak.w = 170;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I think I'd notice a badger, kid.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.badger03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "busy1";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.busy1";
{
tmp_speak.primary = 99;
tmp_speak.wx = -262.936764964224;
tmp_speak.wy = 252;
tmp_speak.w = 281;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Didn't you hear me? I'm busy. Now if only I could read this thing… blasted tiny letters…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.archivist.busy1",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.busy1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "busy2";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.busy2";
{
tmp_speak.primary = 98;
tmp_speak.wx = -258.00000000403656;
tmp_speak.wy = 216.99999999999997;
tmp_speak.w = 269;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I used to have a magnifying glass around here…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.magnify",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.busy2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "coffee01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.coffee01";
{
tmp_speak.primary = false;
tmp_speak.wx = 100;
tmp_speak.wy = 100;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hold on… what's that coffee cup doing on your desk?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.coffee01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "coffee02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "coffee02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.coffee02";
{
tmp_speak.primary = false;
tmp_speak.wx = 100;
tmp_speak.wy = 100;
tmp_speak.w = 100;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Is this another joke? Sorry, kid, work to do.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.coffee02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finish1_01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_01";
{
tmp_speak.primary = false;
tmp_speak.wx = -26.000000000000018;
tmp_speak.wy = 154.99999999999994;
tmp_speak.w = 229;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "If you find Teddy, please call Grampa Leo! He'll know what to do.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "finish1_02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finish1_02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_02";
{
tmp_speak.primary = false;
tmp_speak.wx = -260;
tmp_speak.wy = 246;
tmp_speak.w = 265;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Leo? Leopold, you mean? Weren't they thinking about getting rid of him?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "finish1_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "finish1_03";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_03";
{
tmp_speak.primary = false;
tmp_speak.wx = -36.00000000000003;
tmp_speak.wy = 112.99999999999996;
tmp_speak.w = 277;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "No way! Not while I'm around.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.finish1_03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "hub1";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1";
{
tmp_speak.primary = 96;
tmp_speak.wx = -217.0000000080966;
tmp_speak.wy = 248.99999999999994;
tmp_speak.w = 175;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What d'you need?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -38.00000000022385;
tmp_speak.options_wy = 188;
tmp_speak.options_w = 307;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.drycleaner.frontdesk.logbook.hub",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "inquire_badger";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1.inquire_badger";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I'm looking for my badger, Teddy. He's been kidnapped!";
tmp_option.target_speak = "badger01";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_slip";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1.inquire_slip";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Do you know what this is? It was pinned to an old tunic.";
tmp_option.target_speak = "slip";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "nevermind";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.hub1.nevermind";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Nevermind.";
tmp_option.target_speak = "finish1_01";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library01";
{
tmp_speak.primary = 95;
tmp_speak.wx = -87.99701299333621;
tmp_speak.wy = 232;
tmp_speak.w = 133;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "What now?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 98.00000021053748;
tmp_speak.options_wy = 176.99999999999997;
tmp_speak.options_w = 228;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.archivist.library01",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next1";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library01.next1";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I found something!";
tmp_option.target_speak = "library02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "next2";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library01.next2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Wanna hear a joke?";
tmp_option.target_speak = "library03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library02";
{
tmp_speak.primary = false;
tmp_speak.wx = -75.99999999999996;
tmp_speak.wy = 209.99999999999997;
tmp_speak.w = 115;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Don't care.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 98.00000000000006;
tmp_speak.options_wy = 155.99999999999997;
tmp_speak.options_w = 212;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Wanna hear a joke?";
tmp_option.target_speak = "library03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library03";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library03";
{
tmp_speak.primary = false;
tmp_speak.wx = -65;
tmp_speak.wy = 217.99999999999997;
tmp_speak.w = 76;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Fine.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "library04";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library04";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library04";
{
tmp_speak.primary = false;
tmp_speak.wx = 95.00000000000006;
tmp_speak.wy = 222.99999999999997;
tmp_speak.w = 225;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Ok. Let's see… um… Where do baby cows go to eat lunch?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library04.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "library05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library05";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library05";
{
tmp_speak.primary = false;
tmp_speak.wx = -92.99999999999997;
tmp_speak.wy = 214.99999999999994;
tmp_speak.w = 157;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Um… the barn?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library05.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "library06";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library06";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library06";
{
tmp_speak.primary = false;
tmp_speak.wx = 86.00000000000003;
tmp_speak.wy = 157.99999999999994;
tmp_speak.w = 180;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "No, the calf-eteria!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library06.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "library07";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library07";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library07";
{
tmp_speak.primary = false;
tmp_speak.wx = -117;
tmp_speak.wy = 264;
tmp_speak.w = 190;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Ha! That's a knee slapper. How can I help ya, kid?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library07.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "library08";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library08";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library08";
{
tmp_speak.primary = false;
tmp_speak.wx = 44.000000000000036;
tmp_speak.wy = 187;
tmp_speak.w = 154;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I found a name and date.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library08.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "library09";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library09";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library09";
{
tmp_speak.primary = false;
tmp_speak.wx = -164.99999999999994;
tmp_speak.wy = 294.99999999999994;
tmp_speak.w = 294;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Excellent! You'll want to try the library… They'll have all sorts of info on Youmans. I'll dig up some stuff around here.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library09.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "library_short";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.library_short";
{
tmp_speak.primary = 94;
tmp_speak.wx = -164.99999999999994;
tmp_speak.wy = 300.99999999999994;
tmp_speak.w = 272;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You'll want to try the library… They'll have all sorts of info on Youmans. I'll dig up some stuff around here.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.library.microfiche.newspaper.hub",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.library_short.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "magnify";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.magnify";
{
tmp_speak.primary = 97;
tmp_speak.wx = -242.44615446273787;
tmp_speak.wy = 223.99999999999997;
tmp_speak.w = 255;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Now that's more like it! Guess I can spare a minute.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.archivist.magnify",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.magnify.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "newspaper";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.newspaper";
{
tmp_speak.primary = 1;
tmp_speak.wx = 13.5;
tmp_speak.wy = 169;
tmp_speak.w = 359;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "There's more info at the Stacks. Here's a call number you can use.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 210.5;
tmp_speak.options_wy = 16.999999999999986;
tmp_speak.options_w = 161;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.newspaper.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Thanks a bunch!";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "slip";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.slip";
{
tmp_speak.primary = false;
tmp_speak.wx = -280;
tmp_speak.wy = 283;
tmp_speak.w = 312;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "archivist";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "A tunic? Try the Human Ecology building. You'll be able to talk to some textile experts at the university.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 158.50425087108016;
tmp_speak.options_wy = 27.000000000000014;
tmp_speak.options_w = 200.20961672473868;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.slip.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "hub1";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_01";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_01";
{
tmp_speak.primary = 100;
tmp_speak.wx = -203.00009641483433;
tmp_speak.wy = 194;
tmp_speak.w = 144;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Are you lost?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.historicalsociety.frontdesk.archivist.start1_01",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_01.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_02";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_02";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_02";
{
tmp_speak.primary = false;
tmp_speak.wx = -44.05251298977522;
tmp_speak.wy = 129;
tmp_speak.w = 221;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Actually, I'm on a quest. I need your help!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_02.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_03";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_03";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_03";
{
tmp_speak.primary = false;
tmp_speak.wx = -238.00000000000009;
tmp_speak.wy = 258.99999999999994;
tmp_speak.w = 236;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Wait a minute… you're that troublemaker Wells was talking about.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_03.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_04";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_04";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_04";
{
tmp_speak.primary = false;
tmp_speak.wx = -40.000000499429945;
tmp_speak.wy = 129.99999999999997;
tmp_speak.w = 218;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'm not a troublemaker. My friend is missing!";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_04.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_05";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_05";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_05";
{
tmp_speak.primary = false;
tmp_speak.wx = -34.00000000013807;
tmp_speak.wy = 133;
tmp_speak.w = 185;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Whatever. Can you help me or not?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_05.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_06";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_06";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_06";
{
tmp_speak.primary = false;
tmp_speak.wx = -257.00000000000006;
tmp_speak.wy = 226.99999999999997;
tmp_speak.w = 281;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Hmm. Wish I could help. But I don't have time for kid stuff.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_06.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "start1_07";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "start1_07";
tmp_speak.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_07";
{
tmp_speak.primary = false;
tmp_speak.wx = -236.00000000000009;
tmp_speak.wy = 229.99999999999994;
tmp_speak.w = 238;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I'm busy. Now if only I could read this thing… blasted tiny letters…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.historicalsociety.frontdesk.archivist.start1_07.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "magnify";
tmp_observation.fqid = "tunic.historicalsociety.frontdesk.magnify";
{
tmp_observation.ww = 50.146372131457355;
tmp_observation.wh = 35.99999999999997;
tmp_observation.wx = 213.07926091128468;
tmp_observation.wy = 174;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -0.19702019410135563;
tmp_observation.hover_icon_wy = 32;
tmp_observation.animcycle_id = "magnifyingglass";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I bet the Archivist could use this!";
tmp_observation.blip_wx = 100;
tmp_observation.blip_wy = 100;
tmp_observation.blip_w = 100;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
"tunic.historicalsociety.collection.tunic.slip",
];
tmp_observation.relocks = [
"tunic.historicalsociety.frontdesk.magnify",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tostacks";
tmp_porthole.fqid = "tunic.historicalsociety.frontdesk.tostacks";
{
tmp_porthole.ww = 767;
tmp_porthole.wh = 86.99999999999999;
tmp_porthole.wx = 46.5;
tmp_porthole.wy = -299.50000000000006;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "stacks";
tmp_porthole.target_start_wx = 65.24595080983798;
tmp_porthole.target_start_wy = 110.4;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "chair";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.chair";
{
tmp_inert.ww = 244.99997814818758;
tmp_inert.wh = 235;
tmp_inert.wx = -364.28238232986445;
tmp_inert.wy = -29.2233449477352;
tmp_inert.wz = 0;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "frontdesk_chair";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "desk";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.desk";
{
tmp_inert.ww = 423.94524295076604;
tmp_inert.wh = 241.7588850174216;
tmp_inert.wx = -17.657155158539638;
tmp_inert.wy = -51.879442508710795;
tmp_inert.wz = 4;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "frontdesk";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "deskchair";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.deskchair";
{
tmp_inert.ww = 148.99999873531505;
tmp_inert.wh = 148.99999999999997;
tmp_inert.wx = -53.500053019559175;
tmp_inert.wy = 1.500000000000071;
tmp_inert.wz = 2;
tmp_inert.g = 0;
tmp_inert.animcycle_id = "frontdesk_deskchair";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
tmp_inert = new inert();
tmp_inert.id = "fgoffice";
tmp_inert.fqid = "tunic.historicalsociety.frontdesk.fgoffice";
{
tmp_inert.ww = 996.8776306620208;
tmp_inert.wh = 130.055331010453;
tmp_inert.wx = -37.96991189093427;
tmp_inert.wy = -264.43477351916385;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgoffice";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "stacks";
tmp_room.fqid = "tunic.historicalsociety.stacks";
{
tmp_room.primary = false;
tmp_room.ww = 1100;
tmp_room.wh = 695;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_historicalsociety_stacks";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:1.0983803239353165, wy:-175.46889622075582, ww:562.2493101379723, wh:431.4884823035393 },
];
tmp_room.lights = [
{wx:333.20026994601085, wy:299.6000000000001, ww:44.19646070785856, wh:35.19999999999998 },
];
tmp_room.shadows = [
{wx:391.921625674865, wy:299.59999999999997, ww:46.806298740251876, wh:39.99999999999999 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 43.06232753449308;
tmp_room.target_start_wy = -44.39999999999998;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "journalsaz";
tmp_object.fqid = "tunic.historicalsociety.stacks.journalsaz";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 337.7442711457709;
tmp_object.wy = 120.60000000000002;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "journalsaz";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
"tunic.historicalsociety.frontdesk.archivist.newspaper",
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.historicalsociety.stacks.journalsaz.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "journalsaz_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.historicalsociety.stacks.toentry";
{
tmp_porthole.ww = 658.7506898620272;
tmp_porthole.wh = 117.5736652669466;
tmp_porthole.wx = 19.401619676064854;
tmp_porthole.wy = -325.6754349130175;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 270.2744446093198;
tmp_porthole.target_start_wy = -60.01625878934189;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.historicalsociety.stacks.tofrontdesk";
{
tmp_porthole.ww = 109.79346130773845;
tmp_porthole.wh = 232.63611277744448;
tmp_porthole.wx = -7.395050989802094;
tmp_porthole.wy = 105.41307738452316;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 6.524595080983803;
tmp_porthole.act_wy = -19.2;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 46.15024390243908;
tmp_porthole.target_start_wy = -296.40000000000003;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_inert = new inert();
tmp_inert.id = "fgcarts";
tmp_inert.fqid = "tunic.historicalsociety.stacks.fgcarts";
{
tmp_inert.ww = 870.0000000000002;
tmp_inert.wh = 214;
tmp_inert.wx = 2.483609070950479;
tmp_inert.wy = -272.9478270719087;
tmp_inert.wz = 999;
tmp_inert.g = 0.1;
tmp_inert.animcycle_id = "fgcarts";
tmp_inert.unlocks = [
];
tmp_inert.relocks = [
];

tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);
}
tmp_room.inerts.push(tmp_inert);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "humanecology";
tmp_scene.fqid = "tunic.humanecology";
{
tmp_scene.primary = false;
tmp_scene.ww = 216;
tmp_scene.wh = 132.00000000000003;
tmp_scene.wx = -238;
tmp_scene.wy = 79.00000000000001;
tmp_scene.animcycle_id = "scene_humanecology";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
"tunic.historicalsociety.frontdesk.archivist.slip",
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.humanecology.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1194.5508684863523;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_humanecology_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-3.5, wy:-200.49999999999997, ww:873, wh:253.00000000000003 },
];
tmp_room.lights = [
{wx:-3.5, wy:-200.49999999999997, ww:873, wh:253.00000000000003 },
];
tmp_room.shadows = [
{wx:-3.5, wy:-200.49999999999997, ww:873, wh:253.00000000000003 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 0;
tmp_room.target_start_wy = 0;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.humanecology.frontdesk.worker";
{
tmp_person.ww = 201.0001201081107;
tmp_person.wh = 273.00000000000006;
tmp_person.wx = -183.4790369791401;
tmp_person.wy = -3.699999999999932;
tmp_person.wz = 0;
tmp_person.act_wx = 153.9461063577049;
tmp_person.act_wy = -28;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 27.999999999999996;
tmp_person.hover_icon_wy = 28;
tmp_person.animcycle_id = "ecologist";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "badger1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger1";
{
tmp_speak.primary = 97;
tmp_speak.wx = -57.19179528397005;
tmp_speak.wy = 188.99999999999997;
tmp_speak.w = 210;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "You haven't seen any badgers around here, have you?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.badger1.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger2";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger2";
{
tmp_speak.primary = false;
tmp_speak.wx = -292.00035021557676;
tmp_speak.wy = 277.99999999999994;
tmp_speak.w = 333;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Badgers? No… but I hear the museum's got one on the loose. Smart little critter, by the sounds of it.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.badger2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "badger3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "badger3";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.badger3";
{
tmp_speak.primary = false;
tmp_speak.wx = -56.000000000495696;
tmp_speak.wy = 161.99999999999997;
tmp_speak.w = 207;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Yep. And super good at checkers.";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.badger3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "better";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.better";
{
tmp_speak.primary = 98;
tmp_speak.wx = -300.44849052355795;
tmp_speak.wy = 274.99999999999994;
tmp_speak.w = 282;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Ahhhh. Much better. Come to think of it, I've got a file of dry cleaners here. Take a look!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.humanecology.frontdesk.worker.better",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.better.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro1";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro1";
{
tmp_speak.primary = 100;
tmp_speak.wx = -149.00000063243886;
tmp_speak.wy = 297;
tmp_speak.w = 334;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How lovely, a visitor! Take a look around. Would you care for some tea?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = -55.00000827480898;
tmp_speak.options_wy = 171.99999999999997;
tmp_speak.options_w = 295;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.humanecology.frontdesk.worker.intro1",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next1";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro1.next1";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "Well, maybe one cup… but I need to ask you something first.";
tmp_option.target_speak = "intro2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "next2";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro1.next2";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "I'm sort of in a hurry.";
tmp_option.target_speak = "intro2";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro2";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro2";
{
tmp_speak.primary = false;
tmp_speak.wx = -178;
tmp_speak.wy = 277;
tmp_speak.w = 267;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh, all right. How can I help?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro2.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro3";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro3";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro3";
{
tmp_speak.primary = false;
tmp_speak.wx = -13.000000000000007;
tmp_speak.wy = 206.99999999999997;
tmp_speak.w = 183;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Do you know what this slip is?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro3.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro4";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro4";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro4";
{
tmp_speak.primary = false;
tmp_speak.wx = -218;
tmp_speak.wy = 281;
tmp_speak.w = 311;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Looks like a dry cleaning receipt.";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro4.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro5";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro5";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro5";
{
tmp_speak.primary = false;
tmp_speak.wx = -39.00000000000007;
tmp_speak.wy = 211;
tmp_speak.w = 247;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I need to find all the dry cleaners that were around in 1916! Can you help me?";
tmp_speak.speaker = SPEAKER_PLAYER;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro5.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "intro6";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "intro6";
tmp_speak.fqid = "tunic.humanecology.frontdesk.worker.intro6";
{
tmp_speak.primary = 99;
tmp_speak.wx = -231;
tmp_speak.wy = 309;
tmp_speak.w = 246;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "null";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "Oh, I don't know… it's so hard to think on an empty stomach…";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 100;
tmp_speak.options_wy = 100;
tmp_speak.options_w = 100;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
"tunic.humanecology.frontdesk.cookies",
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "next";
tmp_option.fqid = "tunic.humanecology.frontdesk.worker.intro6.next";
{
tmp_option.index = 0;
tmp_option.raw_qtext = ">";
tmp_option.target_speak = "null";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_observation = new observation();
tmp_observation.id = "cookies";
tmp_observation.fqid = "tunic.humanecology.frontdesk.cookies";
{
tmp_observation.ww = 100;
tmp_observation.wh = 100;
tmp_observation.wx = -377;
tmp_observation.wy = 31.000000000000014;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = 0;
tmp_observation.hover_icon_wy = 0;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "I bet the Curator could use these!";
tmp_observation.blip_wx = -506.7235116729863;
tmp_observation.blip_wy = 179.99999999999991;
tmp_observation.blip_w = 165;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
"tunic.humanecology.frontdesk.worker.intro6",
];
tmp_observation.relocks = [
"tunic.humanecology.frontdesk.cookies",
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_observation = new observation();
tmp_observation.id = "drycleaners";
tmp_observation.fqid = "tunic.humanecology.frontdesk.drycleaners";
{
tmp_observation.ww = 100;
tmp_observation.wh = 100;
tmp_observation.wx = 283.0000000057347;
tmp_observation.wy = 45.99999999999996;
tmp_observation.wz = 0;
tmp_observation.act_wx = 0;
tmp_observation.act_wy = 0;
tmp_observation.act_anim = 0;
tmp_observation.hover_icon_wx = -8.999997844033715;
tmp_observation.hover_icon_wy = 3;
tmp_observation.animcycle_id = "null";
tmp_observation.hover_icon_animcycle_id = "hblip_interact";
tmp_observation.audio_id = "null";
tmp_observation.raw_text = "This one was established in 1910!";
tmp_observation.blip_wx = 181.86333001482677;
tmp_observation.blip_wy = 197;
tmp_observation.blip_w = 194;
tmp_observation.blip_h = 30;
tmp_observation.raw_notifications = [
];
tmp_observation.unlocks = [
"tunic.humanecology.frontdesk.worker.better",
];
tmp_observation.relocks = [
];

tmp_observation.animcycle_inst = gen_animcycle_inst(tmp_observation.animcycle_id,tmp_level.animcycles);
tmp_observation.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_observation.hover_icon_animcycle_id,tmp_level.animcycles);
tmp_observation.text = stextToLines(tmp_observation.raw_text, tmp_observation.blip_w);
for(var i = 0; i < tmp_observation.raw_notifications.length; i++) tmp_observation.notifications[i] = stextToLines(tmp_observation.raw_notifications[i], tmp_level.notifications_w);
}
tmp_room.observations.push(tmp_observation);
tmp_porthole = new porthole();
tmp_porthole.id = "tohallway";
tmp_porthole.fqid = "tunic.humanecology.frontdesk.tohallway";
{
tmp_porthole.ww = 117.06292803970226;
tmp_porthole.wh = 336.19999999999993;
tmp_porthole.wx = 527.4760794044665;
tmp_porthole.wy = 0.7000000000001023;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "hallway";
tmp_porthole.target_start_wx = 440;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "kohlcenter";
tmp_scene.fqid = "tunic.kohlcenter";
{
tmp_scene.primary = false;
tmp_scene.ww = 270;
tmp_scene.wh = 167.99999999999997;
tmp_scene.wx = -177.99999999999994;
tmp_scene.wy = -181;
tmp_scene.animcycle_id = "scene_kohlcenter";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "halloffame";
tmp_room.fqid = "tunic.kohlcenter.halloffame";
{
tmp_room.primary = false;
tmp_room.ww = 2039.0050468637346;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_kohlcenter_halloffame";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:-5.560922855082936, wy:-136.49999999999994, ww:2072.720259552992, wh:270.99999999999983 },
];
tmp_room.lights = [
{wx:955.08850036049, wy:236.7, ww:84.69033886085087, wh:43 },
];
tmp_room.shadows = [
{wx:828.5775054073538, wy:225.3, ww:76.34895457822643, wh:32.20000000000002 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = -16.682768565248775;
tmp_room.target_start_wy = -128.39999999999998;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "jersey";
tmp_object.fqid = "tunic.kohlcenter.halloffame.jersey";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 523.0000038416794;
tmp_object.wy = 88;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "jersey";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.kohlcenter.halloffame.jersey.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "jersey_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"This doesn't look anything like the tunic!",
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_object = new object();
tmp_object.id = "oldpictures";
tmp_object.fqid = "tunic.kohlcenter.halloffame.oldpictures";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 415.0004004745276;
tmp_object.wy = 89.00000000000003;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "oldpictures";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.kohlcenter.halloffame.oldpictures.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "oldpictures_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
"The slip I found is from wayyy back in 1916. But the women's team didn't even start until 1974!",
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.kohlcenter.halloffame.toentry";
{
tmp_porthole.ww = 2098.621485219899;
tmp_porthole.wh = 81.6;
tmp_porthole.wx = 0.5126171593367417;
tmp_porthole.wy = -235.99999999999983;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
tmp_scene = new scene();
tmp_scene.id = "library";
tmp_scene.fqid = "tunic.library";
{
tmp_scene.primary = false;
tmp_scene.ww = 177;
tmp_scene.wh = 172.00000000000006;
tmp_scene.wx = 280.5;
tmp_scene.wy = -122.00000000000004;
tmp_scene.animcycle_id = "scene_library";
tmp_scene.audio_id = "null";
tmp_scene.raw_notifications = [
];
tmp_scene.unlocks = [
"tunic.historicalsociety.frontdesk.archivist.library09",
];
tmp_scene.relocks = [
];

tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);
tmp_room = new room();
tmp_room.id = "frontdesk";
tmp_room.fqid = "tunic.library.frontdesk";
{
tmp_room.primary = false;
tmp_room.ww = 1424.078303425775;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_frontdesk";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:69.08352365415988, wy:-104.99999999999996, ww:1278.9911908646006, wh:430.0000000000001 },
];
tmp_room.lights = [
{wx:541.0918433931482, wy:259.3000000000001, ww:66.30636215334421, wh:29.000000000000053 },
];
tmp_room.shadows = [
{wx:627.6303425774877, wy:258.90000000000003, ww:54.95073409461684, wh:43.79999999999989 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 73.81875195937431;
tmp_room.target_start_wy = -268.4000000000001;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_person = new person();
tmp_person.id = "worker";
tmp_person.fqid = "tunic.library.frontdesk.worker";
{
tmp_person.ww = 266.5282218597064;
tmp_person.wh = 232.8;
tmp_person.wx = -192.59820554649252;
tmp_person.wy = 98.20000000000005;
tmp_person.wz = 0;
tmp_person.act_wx = 87.38662316476346;
tmp_person.act_wy = -56.4;
tmp_person.act_anim = true;
tmp_person.hover_icon_wx = 0;
tmp_person.hover_icon_wy = 0;
tmp_person.animcycle_id = "librarian";
tmp_person.hover_icon_animcycle_id = "hblip_person";
tmp_person.audio_id = "null";
tmp_person.raw_notifications = [
];
tmp_person.unlocks = [
];
tmp_person.relocks = [
];

tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);
tmp_person.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_person.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_person.raw_notifications.length; i++) tmp_person.notifications[i] = stextToLines(tmp_person.raw_notifications[i], tmp_level.notifications_w);
tmp_speak = new speak();
tmp_speak.id = "hub";
tmp_speak.fqid = "tunic.library.frontdesk.worker.hub";
{
tmp_speak.primary = true;
tmp_speak.wx = -85.24061899220952;
tmp_speak.wy = 251.39999999999998;
tmp_speak.w = 195.0000018198219;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "librarian";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "How can I help you?";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 138.5000000120854;
tmp_speak.options_wy = 186.99999999999997;
tmp_speak.options_w = 257;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "goodbye";
tmp_option.fqid = "tunic.library.frontdesk.worker.hub.goodbye";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Nevermind!";
tmp_option.target_speak = "";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
tmp_option = new option();
tmp_option.id = "inquire_log";
tmp_option.fqid = "tunic.library.frontdesk.worker.hub.inquire_log";
{
tmp_option.index = 0;
tmp_option.raw_qtext = "What can you tell me about [historical lady's name]?";
tmp_option.target_speak = "log";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
tmp_speak = new speak();
tmp_speak.id = "log";
tmp_speak.fqid = "tunic.library.frontdesk.worker.log";
{
tmp_speak.primary = false;
tmp_speak.wx = -4.499999999999773;
tmp_speak.wy = 266;
tmp_speak.w = 394.9999999999999;
tmp_speak.h = 30;
tmp_speak.animcycle_id = "librarian";
tmp_speak.audio_id = "null";
tmp_speak.raw_atext = "I don't know off the top of my head, but you're more than welcome to the microfiche in back; we've got tons of old papers!";
tmp_speak.speaker = SPEAKER_PERSON;
tmp_speak.options_wx = 55.50000000000014;
tmp_speak.options_wy = 130.99999999999997;
tmp_speak.options_w = 147;
tmp_speak.options_h = 30;
tmp_speak.raw_notifications = [
];
tmp_speak.unlocks = [
];
tmp_speak.relocks = [
];

tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);
if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);
for(var i = 0; i < tmp_speak.raw_notifications.length; i++) tmp_speak.notifications[i] = stextToLines(tmp_speak.raw_notifications[i], tmp_level.notifications_w);
tmp_option = new option();
tmp_option.id = "return";
tmp_option.fqid = "tunic.library.frontdesk.worker.log.return";
{
tmp_option.index = 999;
tmp_option.raw_qtext = "Alright, thanks!";
tmp_option.target_speak = "hub";
tmp_option.raw_notifications = [
];
tmp_option.unlocks = [
];
tmp_option.relocks = [
];

if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_speak.options_w);
for(var i = 0; i < tmp_option.raw_notifications.length; i++) tmp_option.notifications[i] = stextToLines(tmp_option.raw_notifications[i], tmp_level.notifications_w);
}
tmp_speak.options.push(tmp_option);
}
tmp_person.speaks.push(tmp_speak);
}
tmp_room.persons.push(tmp_person);
tmp_porthole = new porthole();
tmp_porthole.id = "toentry";
tmp_porthole.fqid = "tunic.library.frontdesk.toentry";
{
tmp_porthole.ww = 137.35171288743888;
tmp_porthole.wh = 185.8;
tmp_porthole.wx = -490.2970636215334;
tmp_porthole.wy = -37.10000000000002;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 66.02544861337684;
tmp_porthole.act_wy = -15.6;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "entry";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = 330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
tmp_porthole = new porthole();
tmp_porthole.id = "tomicrofiche";
tmp_porthole.fqid = "tunic.library.frontdesk.tomicrofiche";
{
tmp_porthole.ww = 85.85840130505707;
tmp_porthole.wh = 138.99999999999994;
tmp_porthole.wx = 489.81859706362167;
tmp_porthole.wy = 136.29999999999998;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "microfiche";
tmp_porthole.target_start_wx = 0;
tmp_porthole.target_start_wy = -330;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
"tunic.library.frontdesk.worker.log",
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
tmp_room = new room();
tmp_room.id = "microfiche";
tmp_room.fqid = "tunic.library.microfiche";
{
tmp_room.primary = false;
tmp_room.ww = 1139.1489361702127;
tmp_room.wh = 660;
tmp_room.wx = 0;
tmp_room.wy = 0;
tmp_room.animcycle_id = "room_library_microfiche";
tmp_room.audio_id = "null";
tmp_room.cam_wh = 660;
tmp_room.nav_min_wz = 0;
tmp_room.nav_max_wz = 1;
tmp_room.navs = [
{wx:11, wy:-194.49999999999997, ww:744, wh:261 },
];
tmp_room.lights = [
{wx:11, wy:-194.49999999999997, ww:744, wh:261 },
];
tmp_room.shadows = [
{wx:11, wy:-194.49999999999997, ww:744, wh:261 },
];
tmp_room.light_color = "rgba(255,255,255,0.2)";
tmp_room.shadow_color = "rgba(0,0,0,0.2)";
tmp_room.ambient_color = "rgba(0,0,0,0)";
tmp_room.target_start_wx = 12.000000000000028;
tmp_room.target_start_wy = -276;
tmp_room.raw_notifications = [
];
tmp_room.unlocks = [
];
tmp_room.relocks = [
];

tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);
tmp_object = new object();
tmp_object.id = "newspaper";
tmp_object.fqid = "tunic.library.microfiche.newspaper";
{
tmp_object.ww = 100;
tmp_object.wh = 100;
tmp_object.wx = 60.79769690122075;
tmp_object.wy = 173.99999999999997;
tmp_object.wz = 0;
tmp_object.act_wx = 0;
tmp_object.act_wy = 0;
tmp_object.act_anim = true;
tmp_object.hover_icon_wx = 0;
tmp_object.hover_icon_wy = 0;
tmp_object.animcycle_id = "newspaper";
tmp_object.hover_icon_animcycle_id = "hblip_interact";
tmp_object.audio_id = "null";
tmp_object.raw_notifications = [
];
tmp_object.unlocks = [
];
tmp_object.relocks = [
];

tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);
tmp_object.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_object.hover_icon_animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_object.raw_notifications.length; i++) tmp_object.notifications[i] = stextToLines(tmp_object.raw_notifications[i], tmp_level.notifications_w);
tmp_view = new view();
tmp_view.id = "hub";
tmp_view.fqid = "tunic.library.microfiche.newspaper.hub";
{
tmp_view.primary = true;
tmp_view.animcycle_id = "newspaper_front";
tmp_view.audio_id = "null";
tmp_view.raw_notifications = [
];
tmp_view.unlocks = [
];
tmp_view.relocks = [
];

tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);
for(var i = 0; i < tmp_view.raw_notifications.length; i++) tmp_view.notifications[i] = stextToLines(tmp_view.raw_notifications[i], tmp_level.notifications_w);
}
tmp_object.views.push(tmp_view);
}
tmp_room.objects.push(tmp_object);
tmp_porthole = new porthole();
tmp_porthole.id = "tofrontdesk";
tmp_porthole.fqid = "tunic.library.microfiche.tofrontdesk";
{
tmp_porthole.ww = 755;
tmp_porthole.wh = 86;
tmp_porthole.wx = 10.5;
tmp_porthole.wy = -282;
tmp_porthole.wz = -1;
tmp_porthole.act_wx = 0;
tmp_porthole.act_wy = 0;
tmp_porthole.act_anim = true;
tmp_porthole.hover_icon_wx = 0;
tmp_porthole.hover_icon_wy = 0;
tmp_porthole.animcycle_id = "door";
tmp_porthole.hover_icon_animcycle_id = "hblip_door";
tmp_porthole.audio_id = "door";
tmp_porthole.target_room = "frontdesk";
tmp_porthole.target_start_wx = 490.0019898988605;
tmp_porthole.target_start_wy = 82.00000000000004;
tmp_porthole.raw_notifications = [
];
tmp_porthole.unlocks = [
];
tmp_porthole.relocks = [
];

tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);
tmp_porthole.hover_icon_animcycle_inst = gen_animcycle_inst(tmp_porthole.hover_icon_animcycle_id,tmp_level.animcycles);
}
tmp_room.portholes.push(tmp_porthole);
}
tmp_scene.rooms.push(tmp_room);
}
tmp_level.scenes.push(tmp_scene);
}
levels.push(tmp_level);

  for(var i = 0; i < levels.length; i++)
  {
    tmp_level = levels[i];
    for(var j = 0; j < tmp_level.scenes.length; j++)
    {
      tmp_scene = tmp_level.scenes[j];
      for(var k = 0; k < tmp_scene.rooms.length; k++)
      {
        tmp_room = tmp_scene.rooms[k];
        tmp_room.nav_min_wz_wy = -99999;
        tmp_room.nav_max_wz_wy =  99999;
        for(var l = 0; l < tmp_room.navs.length; l++)
        {
          var tmp_nav = tmp_room.navs[l]
          if(tmp_nav.wy+tmp_nav.wh/2 > tmp_room.nav_min_wz_wy) tmp_room.nav_min_wz_wy = tmp_nav.wy+tmp_nav.wh/2;
          if(tmp_nav.wy-tmp_nav.wh/2 < tmp_room.nav_max_wz_wy) tmp_room.nav_max_wz_wy = tmp_nav.wy-tmp_nav.wh/2;
        }
        for(var l = 0; l < tmp_room.portholes.length; l++)
        {
          tmp_porthole = tmp_room.portholes[l];
          var id = tmp_scene.fqid+"."+tmp_porthole.target_room;
          var target_room = find(id);
          tmp_porthole.target_room_found = target_room;
          if(target_room) target_room.entry_portholes_found.push(tmp_porthole);
        }
        for(var l = 0; l < tmp_room.persons.length; l++)
        {
          tmp_person = tmp_room.persons[l];
          for(var m = 0; m < tmp_person.speaks.length; m++)
          {
            tmp_speak = tmp_person.speaks[m];
            for(var n = 0; n < tmp_speak.options.length; n++)
            {
              tmp_option = tmp_speak.options[n];
              var id = tmp_person.fqid+"."+tmp_option.target_speak;
              var target_speak = find(id);
              tmp_option.target_speak_found = target_speak;
            }
          }
        }
      }
    }
  }
}

