var ENUM;

ENUM = 0;
var CURSOR_NULL        = ENUM; ENUM++;
var CURSOR_NORMAL      = ENUM; ENUM++;
var CURSOR_PERSON      = ENUM; ENUM++;
var CURSOR_OBJECT      = ENUM; ENUM++;
var CURSOR_OBSERVATION = ENUM; ENUM++;
var CURSOR_PORTHOLE    = ENUM; ENUM++;
var CURSOR_ZONE        = ENUM; ENUM++;
var CURSOR_OPTION      = ENUM; ENUM++;
var CURSOR_MAP         = ENUM; ENUM++;
var CURSOR_COUNT       = ENUM; ENUM++;

ENUM = 0;
var STATE_NULL        = ENUM; ENUM++;
var STATE_NAV         = ENUM; ENUM++;
var STATE_MAP         = ENUM; ENUM++;
var STATE_NOTEBOOK    = ENUM; ENUM++;
var STATE_PERSON      = ENUM; ENUM++;
var STATE_OBJECT      = ENUM; ENUM++;
var STATE_OBSERVATION = ENUM; ENUM++;
var STATE_WILDCARD    = ENUM; ENUM++;
var STATE_CUTSCENE    = ENUM; ENUM++;
var STATE_TRANSITION  = ENUM; ENUM++;
var STATE_COUNT       = ENUM; ENUM++;

ENUM = 0;
var ACT_NULL        = ENUM; ENUM++;
var ACT_PERSON      = ENUM; ENUM++;
var ACT_OBJECT      = ENUM; ENUM++;
var ACT_OBSERVATION = ENUM; ENUM++;
var ACT_PORTHOLE    = ENUM; ENUM++;
var ACT_WILDCARD    = ENUM; ENUM++;
var ACT_INERT       = ENUM; ENUM++;
var ACT_COUNT       = ENUM; ENUM++;

ENUM = 0;
var ANIM_NULL  = ENUM; ENUM++;
var ANIM_IDLE  = ENUM; ENUM++;
var ANIM_WALK  = ENUM; ENUM++;
var ANIM_ACT   = ENUM; ENUM++;
var ANIM_COUNT = ENUM; ENUM++;

ENUM = 0;
var AVATAR_NULL  = ENUM; ENUM++;
var AVATAR_IDLE  = ENUM; ENUM++;
var AVATAR_WALK  = ENUM; ENUM++;
var AVATAR_ACT   = ENUM; ENUM++;
var AVATAR_COUNT = ENUM; ENUM++;

ENUM = 0;
var SPEAKER_NULL   = ENUM; ENUM++;
var SPEAKER_PLAYER = ENUM; ENUM++;
var SPEAKER_PERSON = ENUM; ENUM++;
var SPEAKER_COUNT  = ENUM; ENUM++;

ENUM = 0;
var CUTSCENE_COMMAND_NULL    = ENUM; ENUM++;
var CUTSCENE_COMMAND_CREATE  = ENUM; ENUM++;
var CUTSCENE_COMMAND_DESTROY = ENUM; ENUM++;
var CUTSCENE_COMMAND_ANIMATE = ENUM; ENUM++;
var CUTSCENE_COMMAND_ACT     = ENUM; ENUM++;
var CUTSCENE_COMMAND_AUDIO   = ENUM; ENUM++;
var CUTSCENE_COMMAND_TWEEN   = ENUM; ENUM++;
var CUTSCENE_COMMAND_TARGET  = ENUM; ENUM++;
var CUTSCENE_COMMAND_WAIT    = ENUM; ENUM++;
var CUTSCENE_COMMAND_END     = ENUM; ENUM++;
var CUTSCENE_COMMAND_COUNT   = ENUM; ENUM++;
var CUTSCENE_COMMAND_IGNORE = -927345892; //lolololol type system

ENUM = 0;
var CUTSCENE_ENTITY_NULL     = ENUM; ENUM++;
var CUTSCENE_ENTITY_CAMERA   = ENUM; ENUM++;
var CUTSCENE_ENTITY_AVATAR   = ENUM; ENUM++;
var CUTSCENE_ENTITY_SCENE    = ENUM; ENUM++;
var CUTSCENE_ENTITY_CUTSCENE = ENUM; ENUM++;
var CUTSCENE_ENTITY_COUNT    = ENUM; ENUM++;

