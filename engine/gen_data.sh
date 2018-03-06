#!/bin/bash

ENGINE_DD=../assets/data
GAME_DD=assets/data
STUB_D=stubs
OUT=data.js
FINAL=../src/scenes
TTY=`tty`
AUTOFIX="0"
NOSTUB="0"
LIST="0"
NOGEN="0"
GENCMD=""
GENFQID=""
RMCMD=""
RMFQID=""
SEARCHTERM="."
SEARCHTYPE="."

id() #turns ../assets/data/levels/my_level/maps/my_map/.../banana.meta into banana (removes path + .meta) #engine/game
{
  basename $@ | sed 's@\.meta@@'
}
dir() #turns ../assets/data/levels/my_level/maps/my_map/.../banana.meta into ../assets/data/levels/my_level/maps/my_map/.../banana (removes .meta) #engine
{
  echo $@ | sed 's@\.meta@@'
}
img() #turns ../assets/data/levels/my_level/maps/my_map/.../banana.png into assets/data/levels/my_level/maps/my_map/.../banana.png (makes .png relative to data directory) #engine/game
{
  echo $@ | sed -e "s@^$ENGINE_DD@$GAME_DD@"
}

stubmeta() #type dir name
{
  cp $STUB_D/$1.meta $2/$3.meta
}

stubfull() #type dir name
{
  mkdir -p $2/$3
  stubmeta "$1" "$2" "$3"
}

stubfullifdne() #type dir name
{
  if [ ! -f $2/$3.meta ]; then
    stubfull "$1" "$2" "$3"
  fi
}

rmfull() #type dir name
{
  rm $2/$3.meta
  rm -r $2/$3
}

ensuredelimeter() #type dir
{
  if [ ! -d $2/${1}s ]; then
    echo "ERROR: ${1}s directory not found (expected $2/${1}s)" >>$TTY
    if queryfix; then
      mkdir -p $2/${1}s
    else
      return 1
    fi
  fi
}

forcestub() #type dir
{
  echo "ERROR: No ${1}s found in $2" >>$TTY
  if queryfix; then
    stubfull $1 $2 `getname $1`
    return 0
  else
    return 1
  fi
}

trystub() #type dir
{
  echo "Warning: No ${1}s found in $2" >>$TTY
  if querystub; then
    stubfull $1 $2 `getname $1`
    return 0
  else
    return 1
  fi
}

fixifdne() #type dir name
{
  #dir
  if [ ! -d $2/$3 ]; then
    echo "ERROR: $1 directory not found for $3 (expected $2/$3)" >>$TTY
    if queryfix; then
      mkdir -p $2/$3
    else
      return 1
    fi
  fi
}

queryfix()
{
  if [ $AUTOFIX == "1" ]; then echo "(autofix)" > $TTY; return 0; fi #yes
  echo -n "Fix? (y)/n:" > $TTY
  read x
  if [ "@"$x == "@n" ]; then return 1; #1 = fail
  else return 0; #default success
  fi
}
querystub()
{
  if [ $NOSTUB == "1" ]; then echo "(nostub)" > $TTY; return 1; fi #no
  echo -n "Stub? y/(n):" > $TTY
  read x
  if [ "@"$x == "@y" ]; then return 0; #0 = success
  else return 1; #default fail
  fi
}
getname()
{
  echo -n "Name ($@):" > $TTY
  read name
  if [ "@"$name == "@" ]; then echo $@
  else echo $name
  fi
}

while [ $# -gt 0 ]; do
  if [ "@"$1 == "@autofix" ]; then AUTOFIX="1"; fi
  if [ "@"$1 == "@nostub" ];  then NOSTUB="1";  fi
  if [ "@"$1 == "@list" ];    then LIST="1";    fi
  if [ "@"$1 == "@nogen" ];   then NOGEN="1";   fi
  if [ "@"$1 == "@search" ]; then shift; SEARCHTERM=$1; if [ "@"$SEARCHTERM == "@" ]; then echo "usage: $0 list search searchterm"; fi fi
  if [ "@"$1 == "@type" ];   then shift; SEARCHTYPE=$1; if [ "@"$SEARCHTYPE == "@" ]; then echo "usage: $0 list type animcycle"; fi fi
  if [ "@"$1 == "@genlevel" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genlevel level";                                      fi fi
  if [ "@"$1 == "@genanimcycle" ]; then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genanimcycle level.animcycle";                        fi fi
  if [ "@"$1 == "@genaudio" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genaudio level.audio";                                fi fi
  if [ "@"$1 == "@genentry" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genentry level.entry";                                fi fi
  if [ "@"$1 == "@gencutscene" ];  then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 gencutscene level.cutscene";                          fi fi
  if [ "@"$1 == "@genmap" ];       then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genmap level.map";                                    fi fi
  if [ "@"$1 == "@genscene" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genscene level.map.scene";                            fi fi
  if [ "@"$1 == "@genroom" ];      then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genroom level.map.scene.room";                        fi fi
  if [ "@"$1 == "@genperson" ];    then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genperson level.map.scene.room.person";               fi fi
  if [ "@"$1 == "@genspeak" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genspeak level.map.scene.room.person.speak";          fi fi
  if [ "@"$1 == "@genoption" ];    then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genoption level.map.scene.room.person.speak.option";  fi fi
  if [ "@"$1 == "@genobject" ];    then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genobject level.map.scene.room.object";               fi fi
  if [ "@"$1 == "@genview" ];      then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genview level.map.scene.room.object.view";            fi fi
  if [ "@"$1 == "@genzone" ];      then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genzone level.map.scene.room.object.view.zone";       fi fi
  if [ "@"$1 == "@genporthole" ];  then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genporthole level.map.scene.room.porthole";           fi fi
  if [ "@"$1 == "@genwildcard" ];  then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 genwildcard level.map.scene.room.wildcard";           fi fi
  if [ "@"$1 == "@geninert" ];     then GENCMD=$1; shift; GENFQID=$1; if [ "@"$GENFQID == "@" ]; then echo "usage: $0 geninert level.map.scene.room.inert";                 fi fi
  if [ "@"$1 == "@rmlevel" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmlevel level";                                      fi fi
  if [ "@"$1 == "@rmanimcycle" ]; then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmanimcycle level.animcycle";                        fi fi
  if [ "@"$1 == "@rmaudio" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmaudio level.audio";                                fi fi
  if [ "@"$1 == "@rmentry" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmentry level.entry";                                fi fi
  if [ "@"$1 == "@rmcutscene" ];  then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmcutscene level.cutscene";                          fi fi
  if [ "@"$1 == "@rmmap" ];       then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmmap level.map";                                    fi fi
  if [ "@"$1 == "@rmscene" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmscene level.map.scene";                            fi fi
  if [ "@"$1 == "@rmroom" ];      then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmroom level.map.scene.room";                        fi fi
  if [ "@"$1 == "@rmperson" ];    then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmperson level.map.scene.room.person";               fi fi
  if [ "@"$1 == "@rmspeak" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmspeak level.map.scene.room.person.speak";          fi fi
  if [ "@"$1 == "@rmoption" ];    then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmoption level.map.scene.room.person.speak.option";  fi fi
  if [ "@"$1 == "@rmobject" ];    then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmobject level.map.scene.room.object";               fi fi
  if [ "@"$1 == "@rmview" ];      then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmview level.map.scene.room.object.view";            fi fi
  if [ "@"$1 == "@rmzone" ];      then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmzone level.map.scene.room.object.view.zone";       fi fi
  if [ "@"$1 == "@rmporthole" ];  then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmporthole level.map.scene.room.porthole";           fi fi
  if [ "@"$1 == "@rmwildcard" ];  then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rmwildcard level.map.scene.room.wildcard";           fi fi
  if [ "@"$1 == "@rminert" ];     then RMCMD=$1; shift; RMFQID=$1; if [ "@"$RMFQID == "@" ]; then echo "usage: $0 rminert level.map.scene.room.inert";                 fi fi
  shift;
done

#gen command
GENBREAKDOWN=$GENFQID

GENLEVEL=`   echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
if [ "@"$GENCMD == "@genanimcycle" ]; then
GENANIMCYCLE=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genaudio" ]; then
GENAUDIO=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genentry" ]; then
GENENTRY=`   echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@gencutscene" ]; then
GENCUTSCENE=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
else
GENMAP=`     echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENSCENE=`   echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENROOM=`    echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
if [ "@"$GENCMD == "@genperson" ] || [ "@"$GENCMD == "@genspeak" ] || [ "@"$GENCMD == "@genoption" ]; then
GENPERSON=`  echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENSPEAK=`   echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENOPTION=`  echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genobject" ] || [ "@"$GENCMD == "@genview" ] || [ "@"$GENCMD == "@genzone" ]; then
GENOBJECT=`  echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENVIEW=`    echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
GENZONE=`    echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genporthole" ]; then
GENPORTHOLE=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@genwildcard" ]; then
GENWILDCARD=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
elif [ "@"$GENCMD == "@geninert" ]; then
GENINERT=`echo $GENBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $GENBREAKDOWN | grep '\.'` != "@" ]; then GENBREAKDOWN=`echo $GENBREAKDOWN | sed 's/^[^.]*\.//g'`; else GENBREAKDOWN=""; fi
fi
fi

GENDIR=$ENGINE_DD/levels; if [ "@"$GENLEVEL != "@" ]; then stubfullifdne level $GENDIR $GENLEVEL;
  if [ "@"$GENCMD == "@genanimcycle" ]; then
    GENDIR=$GENDIR/$GENLEVEL/animcycles; if [ "@"$GENANIMCYCLE != "@" ]; then stubfullifdne animcycle $GENDIR $GENANIMCYCLE; fi #animcycle
  elif [ "@"$GENCMD == "@genaudio" ]; then
    GENDIR=$GENDIR/$GENLEVEL/audios; if [ "@"$GENAUDIO != "@" ]; then stubfullifdne audio $GENDIR $GENAUDIO; fi #audio
  elif [ "@"$GENCMD == "@genentry" ]; then
    GENDIR=$GENDIR/$GENLEVEL/entrys; if [ "@"$GENENTRY != "@" ]; then stubfullifdne entry $GENDIR $GENENTRY; fi #entry
  elif [ "@"$GENCMD == "@gencutscene" ]; then
    GENDIR=$GENDIR/$GENLEVEL/cutscenes; if [ "@"$GENCUTSCENE != "@" ]; then stubfullifdne cutscene $GENDIR $GENCUTSCENE; fi #cutscene
  else
    GENDIR=$GENDIR/$GENLEVEL/maps; if [ "@"$GENMAP != "@" ]; then stubfullifdne map $GENDIR $GENMAP;
      GENDIR=$GENDIR/$GENMAP/scenes; if [ "@"$GENSCENE != "@" ]; then stubfullifdne scene $GENDIR $GENSCENE;
        GENDIR=$GENDIR/$GENSCENE/rooms; if [ "@"$GENROOM != "@" ]; then stubfullifdne room $GENDIR $GENROOM;

          if [ "@"$GENCMD == "@genperson" ] || [ "@"$GENCMD == "@genspeak" ] || [ "@"$GENCMD == "@genoption" ]; then

            GENDIR=$GENDIR/$GENROOM/persons; if [ "@"$GENPERSON != "@" ]; then stubfullifdne person $GENDIR $GENPERSON;
              GENDIR=$GENDIR/$GENPERSON/speaks; if [ "@"$GENSPEAK != "@" ]; then stubfullifdne speak $GENDIR $GENSPEAK;
                GENDIR=$GENDIR/$GENSPEAK/options; if [ "@"$GENOPTION != "@" ]; then stubfullifdne option $GENDIR $GENOPTION; fi #option
              fi #speak
            fi #person

          elif [ "@"$GENCMD == "@genobject" ] || [ "@"$GENCMD == "@genview" ] || [ "@"$GENCMD == "@genzone" ]; then

            GENDIR=$GENDIR/$GENROOM/objects; if [ "@"$GENOBJECT != "@" ]; then stubfullifdne object $GENDIR $GENOBJECT;
              GENDIR=$GENDIR/$GENOBJECT/views; if [ "@"$GENVIEW != "@" ]; then stubfullifdne view $GENDIR $GENVIEW;
                GENDIR=$GENDIR/$GENVIEW/zones; if [ "@"$GENZONE != "@" ]; then stubfullifdne zone $GENDIR $GENZONE; fi #zone
              fi #view
            fi #object

          elif [ "@"$GENCMD == "@genporthole" ]; then

            GENDIR=$GENDIR/$GENROOM/portholes; if [ "@"$GENPORTHOLE != "@" ]; then stubfullifdne porthole $GENDIR $GENPORTHOLE; fi #porthole

          elif [ "@"$GENCMD == "@genwildcard" ]; then

            GENDIR=$GENDIR/$GENROOM/wildcards; if [ "@"$GENWILDCARD != "@" ]; then stubfullifdne wildcard $GENDIR $GENWILDCARD; fi #wildcard

          elif [ "@"$GENCMD == "@geninert" ]; then

            GENDIR=$GENDIR/$GENROOM/inerts; if [ "@"$GENINERT != "@" ]; then stubfullifdne inert $GENDIR $GENINERT; fi #inert

          fi #type

        fi #room
      fi #scene
    fi #map
  fi #type
fi #level

#rm command
RMBREAKDOWN=$RMFQID

RMLEVEL=`   echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
if [ "@"$RMCMD == "@rmanimcycle" ]; then
RMANIMCYCLE=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmaudio" ]; then
RMAUDIO=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmentry" ]; then
RMENTRY=`   echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmcutscene" ]; then
RMCUTSCENE=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
else
RMMAP=`     echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMSCENE=`   echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMROOM=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
if [ "@"$RMCMD == "@rmperson" ] || [ "@"$RMCMD == "@rmspeak" ] || [ "@"$RMCMD == "@rmoption" ]; then
RMPERSON=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMSPEAK=`   echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMOPTION=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmobject" ] || [ "@"$RMCMD == "@rmview" ] || [ "@"$RMCMD == "@rmzone" ]; then
RMOBJECT=`  echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMVIEW=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
RMZONE=`    echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmporthole" ]; then
RMPORTHOLE=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rmwildcard" ]; then
RMWILDCARD=`echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
elif [ "@"$RMCMD == "@rminert" ]; then
RMINERT=`   echo $RMBREAKDOWN | sed 's/\..*//g'`; if [ "@"`echo $RMBREAKDOWN | grep '\.'` != "@" ]; then RMBREAKDOWN=`echo $RMBREAKDOWN | sed 's/^[^.]*\.//g'`; else RMBREAKDOWN=""; fi
fi
fi

RMDIR=$ENGINE_DD
RMDIR=$RMDIR/levels;            if [ "@"$RMCMD == "@rmlevel" ]    && [ "@"$RMLEVEL != "@" ]    && [ -d $RMDIR/$RMLEVEL ];    then rmfull level     $RMDIR $RMLEVEL;    fi
if [ "@"$RMCMD == "@rmanimcycle" ]; then
RMDIR=$RMDIR/$RMLEVEL/animcycles;if [ "@"$RMCMD == "@rmanimcycle" ] && [ "@"$RMANIMCYCLE != "@" ] && [ -d $RMDIR/$RMANIMCYCLE ]; then rmfull animcycle  $RMDIR $RMANIMCYCLE; fi
elif [ "@"$RMCMD == "@rmaudio" ]; then
RMDIR=$RMDIR/$RMLEVEL/audios;if [ "@"$RMCMD == "@rmaudio" ] && [ "@"$RMAUDIO != "@" ] && [ -d $RMDIR/$RMAUDIO ]; then rmfull audio  $RMDIR $RMAUDIO; fi
elif [ "@"$RMCMD == "@rmentry" ]; then
RMDIR=$RMDIR/$RMLEVEL/entrys;   if [ "@"$RMCMD == "@rmentry" ]    && [ "@"$RMENTRY != "@" ]    && [ -d $RMDIR/$RMENTRY ];    then rmfull entry     $RMDIR $RMENTRY;    fi
elif [ "@"$RMCMD == "@rmcutscene" ]; then
RMDIR=$RMDIR/$RMLEVEL/cutscenes;if [ "@"$RMCMD == "@rmcutscene" ] && [ "@"$RMCUTSCENE != "@" ] && [ -d $RMDIR/$RMCUTSCENE ]; then rmfull cutscene  $RMDIR $RMCUTSCENE; fi
else
RMDIR=$RMDIR/$RMLEVEL/maps;     if [ "@"$RMCMD == "@rmmap" ]      && [ "@"$RMMAP != "@" ]      && [ -d $RMDIR/$RMMAP ];      then rmfull map       $RMDIR $RMMAP;      fi
RMDIR=$RMDIR/$RMMAP/scenes;     if [ "@"$RMCMD == "@rmscene" ]    && [ "@"$RMSCENE != "@" ]    && [ -d $RMDIR/$RMSCENE ];    then rmfull scene     $RMDIR $RMSCENE;    fi
RMDIR=$RMDIR/$RMSCENE/rooms;    if [ "@"$RMCMD == "@rmroom" ]     && [ "@"$RMROOM != "@" ]     && [ -d $RMDIR/$RMROOM ];     then rmfull room      $RMDIR $RMROOM;     fi
if [ "@"$RMCMD == "@rmperson" ] || [ "@"$RMCMD == "@rmspeak" ] || [ "@"$RMCMD == "@rmoption" ]; then
RMDIR=$RMDIR/$RMROOM/persons;   if [ "@"$RMCMD == "@rmperson" ]   && [ "@"$RMPERSON != "@" ]   && [ -d $RMDIR/$RMPERSON ];   then rmfull person    $RMDIR $RMPERSON;   fi
RMDIR=$RMDIR/$RMPERSON/speaks;  if [ "@"$RMCMD == "@rmspeak" ]    && [ "@"$RMSPEAK != "@" ]    && [ -d $RMDIR/$RMSPEAK ];    then rmfull speak     $RMDIR $RMSPEAK;    fi
RMDIR=$RMDIR/$RMSPEAK/option;   if [ "@"$RMCMD == "@rmoption" ]   && [ "@"$RMOPTION != "@" ]   && [ -d $RMDIR/$RMOPTION ];   then rmfull option    $RMDIR $RMOPTION;   fi
elif [ "@"$RMCMD == "@rmobject" ] || [ "@"$RMCMD == "@rmview" ] || [ "@"$RMCMD == "@rmzone" ]; then
RMDIR=$RMDIR/$RMROOM/objects;   if [ "@"$RMCMD == "@rmobject" ]   && [ "@"$RMOBJECT != "@" ]   && [ -d $RMDIR/$RMOBJECT ];   then rmfull object    $RMDIR $RMOBJECT;   fi
RMDIR=$RMDIR/$RMOBJECT/views;   if [ "@"$RMCMD == "@rmview" ]     && [ "@"$RMVIEW != "@" ]     && [ -d $RMDIR/$RMVIEW ];     then rmfull view      $RMDIR $RMVIEW;     fi
RMDIR=$RMDIR/$RMVIEW/zones;     if [ "@"$RMCMD == "@rmzone" ]     && [ "@"$RMZONE != "@" ]     && [ -d $RMDIR/$RMZONE ];     then rmfull zone      $RMDIR $RMZONE;     fi
elif [ "@"$RMCMD == "@rmporthole" ]; then
RMDIR=$RMDIR/$RMROOM/portholes; if [ "@"$RMCMD == "@rmporthole" ] && [ "@"$RMPORTHOLE != "@" ] && [ -d $RMDIR/$RMPORTHOLE ]; then rmfull porthole  $RMDIR $RMPORTHOLE; fi
elif [ "@"$RMCMD == "@rmwildcard" ]; then
RMDIR=$RMDIR/$RMROOM/wildcards; if [ "@"$RMCMD == "@rmwildcard" ] && [ "@"$RMWILDCARD != "@" ] && [ -d $RMDIR/$RMWILDCARD ]; then rmfull wildcard  $RMDIR $RMWILDCARD; fi
elif [ "@"$RMCMD == "@rminert" ]; then
RMDIR=$RMDIR/$RMROOM/inerts;    if [ "@"$RMCMD == "@rminert" ]    && [ "@"$RMINERT != "@" ]    && [ -d $RMDIR/$RMINERT ];    then rmfull inert     $RMDIR $RMINERT;    fi
fi
fi

if [ $NOGEN == "0" ]; then

  # BEGIN
  echo > $OUT

  cat data.pre_stub >> $OUT

  if ensuredelimeter level $ENGINE_DD; then :; else exit; fi
  levels_dir=$ENGINE_DD/levels
  for level in $levels_dir/*.meta; do #levels

    if [ ! -f $level ]; then if forcestub level $levels_dir; then level=$levels_dir/*.meta; else exit; fi fi
    level_id=`id $level`
    level_dir=`dir $level`
    fixifdne level $levels_dir $level_id
    echo - Note: Genning $level_id #debug
    echo "tmp_level = new level();" >> $OUT
    echo "tmp_level.id = \"$level_id\";" >> $OUT
    echo "tmp_level.fqid = \"$level_id\";" >> $OUT
    echo "{" >> $OUT
    cat $level >> $OUT

    if ensuredelimeter animcycle $level_dir; then :; else continue; fi
    animcycles_dir=$level_dir/animcycles
    for animcycle in $animcycles_dir/*.meta; do #animcycles

      if [ ! -f $animcycle ]; then if forcestub animcycle $animcycles_dir; then animcycle=$animcycles_dir/*.meta; else exit; fi fi
      animcycle_id=`id $animcycle`
      animcycle_dir=`dir $animcycle`
      fixifdne animcycle $animcycles_dir $animcycle_id
      echo - Note: Genning $animcycle_id #debug
      echo "tmp_animcycle = new animcycle();" >> $OUT
      echo "tmp_animcycle.id = \"$animcycle_id\";" >> $OUT
      echo "tmp_animcycle.fqid = \"$level_id.$animcycle_id\";" >> $OUT
      echo "{" >> $OUT
      cat $animcycle >> $OUT
      #SPECIAL CASE FOR ANIMCYCLE
      echo "tmp_animcycle.frames = [];" >> $OUT
      for frame in `ls $animcycle_dir/*.png | sort -V`; do
        if [ ! -f $frame ]; then cp $animcycle_dir/../null/0.png $animcycle_dir/0.png; frame=$animcycle_dir/0.png; fi
        echo "tmp_animcycle.frames.push(GenImg(\"`img $frame`\"));" >> $OUT
      done

      echo "}" >> $OUT
      echo "tmp_level.animcycles.push(tmp_animcycle);" >> $OUT

    done
    #SPECIAL CASE FOR ANIMCYCLE TODO: ENFORCE EXISTENCE
    echo "for(var i = 0; i < tmp_level.animcycles.length; i++)" >> $OUT
      echo "if(tmp_level.animcycles[i].id == \"null\") null_animcycle = tmp_level.animcycles[i];" >> $OUT

    if ensuredelimeter audio $level_dir; then :; else continue; fi
    audios_dir=$level_dir/audios
    for audio in $audios_dir/*.mp3; do #audios

      audio_id=`basename $audio | sed 's@\.mp3@@'` #manually overwrite `id` to replace mp3
      echo - Note: Genning $audio_id #debug
      echo "tmp_audio = new audio();" >> $OUT
      echo "tmp_audio.id = \"$audio_id\";" >> $OUT
      echo "tmp_audio.fqid = \"$level_id.$audio_id\";" >> $OUT
      echo "{" >> $OUT
      echo "tmp_audio.aud = GenAud(\"`img $audio`\");" >> $OUT
      echo "}" >> $OUT
      echo "tmp_level.audios.push(tmp_audio);" >> $OUT

    done
    #SPECIAL CASE FOR AUDIO TODO: ENFORCE EXISTENCE
    echo "for(var i = 0; i < tmp_level.audios.length; i++)" >> $OUT
      echo "if(tmp_level.audios[i].id == \"null\") null_audio = tmp_level.audios[i];" >> $OUT

    if ensuredelimeter entry $level_dir; then :; else continue; fi
    entrys_dir=$level_dir/entrys
    for entry in $entrys_dir/*.meta; do #entrys

      if [ ! -f $entry ]; then if forcestub entry $entrys_dir; then entry=$entrys_dir/*.meta; else exit; fi fi
      entry_id=`id $entry`
      entry_dir=`dir $entry`
      fixifdne entry $entrys_dir $entry_id
      echo - Note: Genning $entry_id #debug
      echo "tmp_entry = new entry();" >> $OUT
      echo "tmp_entry.id = \"$entry_id\";" >> $OUT
      echo "tmp_entry.fqid = \"$level_id.$entry_id\";" >> $OUT
      echo "{" >> $OUT
      cat $entry >> $OUT
      echo "tmp_entry.animcycle_inst = gen_animcycle_inst(tmp_entry.animcycle_id,tmp_level.animcycles);" >> $OUT
      echo "}" >> $OUT
      echo "tmp_level.entrys.push(tmp_entry);" >> $OUT

    done

    if ensuredelimeter cutscene $level_dir; then :; else continue; fi
    cutscenes_dir=$level_dir/cutscenes
    for cutscene in $cutscenes_dir/*.meta; do #cutscenes

      if [ ! -f $cutscene ]; then if forcestub cutscene $cutscenes_dir; then cutscene=$cutscenes_dir/*.meta; else exit; fi fi
      cutscene_id=`id $cutscene`
      cutscene_dir=`dir $cutscene`
      fixifdne cutscene $cutscenes_dir $cutscene_id
      echo - Note: Genning $cutscene_id #debug
      echo "tmp_cutscene = new cutscene();" >> $OUT
      echo "tmp_cutscene.id = \"$cutscene_id\";" >> $OUT
      echo "tmp_cutscene.fqid = \"$level_id.$cutscene_id\";" >> $OUT
      echo "{" >> $OUT
      cat $cutscene >> $OUT

      echo "}" >> $OUT
      echo "tmp_level.cutscenes.push(tmp_cutscene);" >> $OUT

    done

    if ensuredelimeter map $level_dir; then :; else continue; fi
    maps_dir=$level_dir/maps
    for map in $maps_dir/*.meta; do #maps

      if [ ! -f $map ]; then if forcestub map $maps_dir; then map=$maps_dir/*.meta; else exit; fi fi
      map_id=`id $map`
      map_dir=`dir $map`
      fixifdne map $maps_dir $map_id
      echo - Note: Genning $map_id #debug
      echo "tmp_map = new map();" >> $OUT
      echo "tmp_map.id = \"$map_id\";" >> $OUT
      echo "tmp_map.fqid = \"$level_id.$map_id\";" >> $OUT
      echo "{" >> $OUT
      cat $map >> $OUT
      echo "tmp_map.animcycle_inst = gen_animcycle_inst(tmp_map.animcycle_id,tmp_level.animcycles);" >> $OUT

      if ensuredelimeter scene $map_dir; then :; else continue; fi
      scenes_dir=$map_dir/scenes
      for scene in $scenes_dir/*.meta; do #scenes

        if [ ! -f $scene ]; then if forcestub scene $scenes_dir; then scene=$scenes_dir/*.meta; else exit; fi fi
        scene_id=`id $scene`
        scene_dir=`dir $scene`
        fixifdne scene $scenes_dir $scene_id
        echo - Note: Genning $scene_id #debug
        echo "tmp_scene = new scene();" >> $OUT
        echo "tmp_scene.id = \"$scene_id\";" >> $OUT
        echo "tmp_scene.fqid = \"$level_id.$map_id.$scene_id\";" >> $OUT
        echo "{" >> $OUT
        cat $scene >> $OUT
        echo "tmp_scene.animcycle_inst = gen_animcycle_inst(tmp_scene.animcycle_id,tmp_level.animcycles);" >> $OUT

        if ensuredelimeter room $scene_dir; then :; else continue; fi
        rooms_dir=$scene_dir/rooms
        for room in $rooms_dir/*.meta; do #rooms

          if [ ! -f $room ]; then if forcestub room $rooms_dir; then room=$rooms_dir/*.meta; else exit; fi fi
          room_id=`id $room`
          room_dir=`dir $room`
          fixifdne room $rooms_dir $room_id
          echo - Note: Genning $room_id #debug
          echo "tmp_room = new room();" >> $OUT
          echo "tmp_room.id = \"$room_id\";" >> $OUT
          echo "tmp_room.fqid = \"$level_id.$map_id.$scene_id.$room_id\";" >> $OUT
          echo "{" >> $OUT
          cat $room >> $OUT
          echo "tmp_room.animcycle_inst = gen_animcycle_inst(tmp_room.animcycle_id,tmp_level.animcycles);" >> $OUT

          if ensuredelimeter person $room_dir; then :; else continue; fi
          persons_dir=$room_dir/persons
          for person in $persons_dir/*.meta; do #persons

            if [ ! -f $person ]; then if trystub person $persons_dir; then person=$persons_dir/*.meta; else continue; fi fi
            person_id=`id $person`
            person_dir=`dir $person`
            fixifdne person $persons_dir $person_id
            echo - Note: Genning $person_id #debug
            echo "tmp_person = new person();" >> $OUT
            echo "tmp_person.id = \"$person_id\";" >> $OUT
            echo "tmp_person.fqid = \"$level_id.$map_id.$scene_id.$room_id.$person_id\";" >> $OUT
            echo "{" >> $OUT
            cat $person >> $OUT
            echo "tmp_person.animcycle_inst = gen_animcycle_inst(tmp_person.animcycle_id,tmp_level.animcycles);" >> $OUT

            if ensuredelimeter speak $person_dir; then :; else continue; fi
            speaks_dir=$person_dir/speaks
            for speak in $speaks_dir/*.meta; do #speaks

              if [ ! -f $speak ]; then if forcestub speak $speaks_dir; then speak=$speaks_dir/*.meta; else exit; fi fi
              speak_id=`id $speak`
              speak_dir=`dir $speak`
              fixifdne speak $speaks_dir $speak_id
              echo - Note: Genning $speak_id #debug
              echo "tmp_speak = new speak();" >> $OUT
              echo "tmp_speak.id = \"$speak_id\";" >> $OUT
              echo "tmp_speak.fqid = \"$level_id.$map_id.$scene_id.$room_id.$person_id.$speak_id\";" >> $OUT
              echo "{" >> $OUT
              cat $speak >> $OUT
              echo "tmp_speak.animcycle_inst = gen_animcycle_inst(tmp_speak.animcycle_id,tmp_level.animcycles);" >> $OUT
              echo "if(!tmp_speak.atext_hard_coded) tmp_speak.atext = stextToLines(tmp_speak.raw_atext, tmp_speak.w);" >> $OUT

              if ensuredelimeter option $speak_dir; then :; else continue; fi
              options_dir=$speak_dir/options
              for option in $options_dir/*.meta; do #options

                if [ ! -f $option ]; then if forcestub option $options_dir; then option=$options_dir/*.meta; else exit; fi fi
                option_id=`id $option`
                option_dir=`dir $option`
                fixifdne option $options_dir $option_id
                echo - Note: Genning $option_id #debug
                echo "tmp_option = new option();" >> $OUT
                echo "tmp_option.id = \"$option_id\";" >> $OUT
                echo "tmp_option.fqid = \"$level_id.$map_id.$scene_id.$room_id.$person_id.$speak_id.$option_id\";" >> $OUT
                echo "{" >> $OUT
                cat $option >> $OUT
                echo "if(!tmp_option.qtext_hard_coded) tmp_option.qtext = stextToLines(tmp_option.raw_qtext, tmp_option.static ? tmp_option.w : tmp_speak.options_w);" >> $OUT

                echo "}" >> $OUT
                echo "tmp_speak.options.push(tmp_option);" >> $OUT

              done

              echo "}" >> $OUT
              echo "tmp_person.speaks.push(tmp_speak);" >> $OUT

            done

            echo "}" >> $OUT
            echo "tmp_room.persons.push(tmp_person);" >> $OUT

          done

          if ensuredelimeter object $room_dir; then :; else continue; fi
          objects_dir=$room_dir/objects
          for object in $objects_dir/*.meta; do #objects

            if [ ! -f $object ]; then if trystub object $objects_dir; then object=$objects_dir/*.meta; else continue; fi fi
            object_id=`id $object`
            object_dir=`dir $object`
            fixifdne object $objects_dir $object_id
            echo - Note: Genning $object_id #debug
            echo "tmp_object = new object();" >> $OUT
            echo "tmp_object.id = \"$object_id\";" >> $OUT
            echo "tmp_object.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id\";" >> $OUT
            echo "{" >> $OUT
            cat $object >> $OUT
            echo "tmp_object.animcycle_inst = gen_animcycle_inst(tmp_object.animcycle_id,tmp_level.animcycles);" >> $OUT

            if ensuredelimeter view $object_dir; then :; else continue; fi
            views_dir=$object_dir/views
            for view in $views_dir/*.meta; do #views

              if [ ! -f $view ]; then if forcestub view $views_dir; then view=$views_dir/*.meta; else exit; fi fi
              view_id=`id $view`
              view_dir=`dir $view`
              fixifdne view $views_dir $view_id
              echo - Note: Genning $view_id #debug
              echo "tmp_view = new view();" >> $OUT
              echo "tmp_view.id = \"$view_id\";" >> $OUT
              echo "tmp_view.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id.$view_id\";" >> $OUT
              echo "{" >> $OUT
              cat $view >> $OUT
              echo "tmp_view.animcycle_inst = gen_animcycle_inst(tmp_view.animcycle_id,tmp_level.animcycles);" >> $OUT

              if ensuredelimeter zone $view_dir; then :; else continue; fi
              zones_dir=$view_dir/zones
              for zone in $zones_dir/*.meta; do #zones

                if [ ! -f $zone ]; then if trystub zone $zones_dir; then zone=$zones_dir/*.meta; else continue; fi fi
                zone_id=`id $zone`
                zone_dir=`dir $zone`
                fixifdne zone $zones_dir $zone_id
                echo - Note: Genning $zone_id #debug
                echo "tmp_zone = new zone();" >> $OUT
                echo "tmp_zone.id = \"$zone_id\";" >> $OUT
                echo "tmp_zone.fqid = \"$level_id.$map_id.$scene_id.$room_id.$object_id.$view_id.$zone_id\";" >> $OUT
                echo "{" >> $OUT
                cat $zone >> $OUT
                echo "tmp_zone.animcycle_inst = gen_animcycle_inst(tmp_zone.animcycle_id,tmp_level.animcycles);" >> $OUT

                echo "}" >> $OUT
                echo "tmp_view.zones.push(tmp_zone);" >> $OUT

              done

              echo "}" >> $OUT
              echo "tmp_object.views.push(tmp_view);" >> $OUT

            done

            echo "}" >> $OUT
            echo "tmp_room.objects.push(tmp_object);" >> $OUT

          done

          if ensuredelimeter porthole $room_dir; then :; else continue; fi
          portholes_dir=$room_dir/portholes
          for porthole in $portholes_dir/*.meta; do #portholes

            if [ ! -f $porthole ]; then if trystub porthole $portholes_dir; then porthole=$portholes_dir/*.meta; else continue; fi fi
            porthole_id=`id $porthole`
            porthole_dir=`dir $porthole`
            fixifdne porthole $portholes_dir $porthole_id
            echo - Note: Genning $porthole_id #debug
            echo "tmp_porthole = new porthole();" >> $OUT
            echo "tmp_porthole.id = \"$porthole_id\";" >> $OUT
            echo "tmp_porthole.fqid = \"$level_id.$map_id.$scene_id.$room_id.$porthole_id\";" >> $OUT
            echo "{" >> $OUT
            cat $porthole >> $OUT
            echo "tmp_porthole.animcycle_inst = gen_animcycle_inst(tmp_porthole.animcycle_id,tmp_level.animcycles);" >> $OUT

            echo "}" >> $OUT
            echo "tmp_room.portholes.push(tmp_porthole);" >> $OUT

          done

          if ensuredelimeter wildcard $room_dir; then :; else continue; fi
          wildcards_dir=$room_dir/wildcards
          for wildcard in $wildcards_dir/*.meta; do #wildcards

            if [ ! -f $wildcard ]; then if trystub wildcard $wildcards_dir; then wildcard=$wildcards_dir/*.meta; else continue; fi fi
            wildcard_id=`id $wildcard`
            wildcard_dir=`dir $wildcard`
            fixifdne wildcard $wildcards_dir $wildcard_id
            echo - Note: Genning $wildcard_id #debug
            echo "tmp_wildcard = new wildcard();" >> $OUT
            echo "tmp_wildcard.id = \"$wildcard_id\";" >> $OUT
            echo "tmp_wildcard.fqid = \"$level_id.$map_id.$scene_id.$room_id.$wildcard_id\";" >> $OUT
            echo "{" >> $OUT
            cat $wildcard >> $OUT
            echo "tmp_wildcard.animcycle_inst = gen_animcycle_inst(tmp_wildcard.animcycle_id,tmp_level.animcycles);" >> $OUT

            echo "}" >> $OUT
            echo "tmp_room.wildcards.push(tmp_wildcard);" >> $OUT

          done

          if ensuredelimeter inert $room_dir; then :; else continue; fi
          inerts_dir=$room_dir/inerts
          for inert in $inerts_dir/*.meta; do #inerts

            if [ ! -f $inert ]; then if trystub inert $inerts_dir; then inert=$inerts_dir/*.meta; else continue; fi fi
            inert_id=`id $inert`
            inert_dir=`dir $inert`
            fixifdne inert $inerts_dir $inert_id
            echo - Note: Genning $inert_id #debug
            echo "tmp_inert = new inert();" >> $OUT
            echo "tmp_inert.id = \"$inert_id\";" >> $OUT
            echo "tmp_inert.fqid = \"$level_id.$map_id.$scene_id.$room_id.$inert_id\";" >> $OUT
            echo "{" >> $OUT
            cat $inert >> $OUT
            echo "tmp_inert.animcycle_inst = gen_animcycle_inst(tmp_inert.animcycle_id,tmp_level.animcycles);" >> $OUT

            echo "}" >> $OUT
            echo "tmp_room.inerts.push(tmp_inert);" >> $OUT

          done

          echo "}" >> $OUT
          echo "tmp_scene.rooms.push(tmp_room);" >> $OUT

        done

        echo "}" >> $OUT
        echo "tmp_map.scenes.push(tmp_scene);" >> $OUT

      done

      echo "}" >> $OUT
      echo "tmp_level.map = tmp_map;" >> $OUT

    done

    echo "}" >> $OUT
    echo "levels.push(tmp_level);" >> $OUT

  done

  cat data.post_stub >> $OUT
  cp $OUT $FINAL

fi

if [ $LIST == "1" ];  then
echo
echo Listing:

  levels_dir=$ENGINE_DD/levels
  for level in $levels_dir/*.meta; do #levels
    if [ ! -f $level ]; then continue; fi
    level_dir=`dir $level`
    level_id=`id $level`
    if [ @`echo $level_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo level | grep "$SEARCHTYPE"` != "@" ]; then printf "(\e[31mlevel\e[39m) $level_id [\e[2m$level_id\e[22m]\n"; fi

    animcycles_dir=$level_dir/animcycles
    for animcycle in $animcycles_dir/*.meta; do #animcycles
      if [ ! -f $animcycle ]; then continue; fi
      animcycle_dir=`dir $animcycle`
      animcycle_id=`id $animcycle`
      if [ @`echo $animcycle_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo animcycle | grep "$SEARCHTYPE"` != "@" ]; then printf "	(\e[33manimcycle\e[39m) $animcycle_id [\e[2m$level_id.$animcycle_id\e[22m]\n"; fi
    done

    audios_dir=$level_dir/audios
    for audio in $audios_dir/*.mp3; do #audios
      if [ ! -f $audio ]; then continue; fi
      audio_id=`basename $audio | sed 's@\.mp3@@'` #manually overwrite `id` to replace mp3
      if [ @`echo $audio_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo audio | grep "$SEARCHTYPE"` != "@" ]; then printf "	(\e[31maudio\e[39m) $audio_id [\e[2m$level_id.$audio_id\e[22m]\n"; fi
    done

    entrys_dir=$level_dir/entrys
    for entry in $entrys_dir/*.meta; do #entrys
      if [ ! -f $entry ]; then continue; fi
      entry_dir=`dir $entry`
      entry_id=`id $entry`
      if [ @`echo $entry_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo entry | grep "$SEARCHTYPE"` != "@" ]; then printf "	(\e[32mentry\e[39m) $entry_id [\e[2m$level_id.$entry_id\e[22m]\n"; fi
    done

    cutscenes_dir=$level_dir/cutscenes
    for cutscene in $cutscenes_dir/*.meta; do #cutscenes
      if [ ! -f $cutscene ]; then continue; fi
      cutscene_dir=`dir $cutscene`
      cutscene_id=`id $cutscene`
      if [ @`echo $cutscene_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo cutscene | grep "$SEARCHTYPE"` != "@" ]; then printf "	(\e[34mcutscene\e[39m) $cutscene_id [\e[2m$level_id.$cutscene_id\e[22m]\n"; fi
    done

    maps_dir=$level_dir/maps
    for map in $maps_dir/*.meta; do #maps
      if [ ! -f $map ]; then continue; fi
      map_dir=`dir $map`
      map_id=`id $map`
      if [ @`echo $map_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo map | grep "$SEARCHTYPE"` != "@" ]; then printf "	(\e[35mmap\e[39m) $map_id [\e[2m$level_id.$map_id\e[22m]\n"; fi

      scenes_dir=$map_dir/scenes
      for scene in $scenes_dir/*.meta; do #scenes
        if [ ! -f $scene ]; then continue; fi
        scene_dir=`dir $scene`
        scene_id=`id $scene`
        if [ @`echo $scene_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo scene | grep "$SEARCHTYPE"` != "@" ]; then printf "		(\e[36mscene\e[39m) $scene_id [\e[2m$level_id.$map_id.$scene_id\e[22m]\n"; fi

        rooms_dir=$scene_dir/rooms
        for room in $rooms_dir/*.meta; do #rooms
          if [ ! -f $room ]; then continue; fi
          room_dir=`dir $room`
          room_id=`id $room`
          if [ @`echo $room_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo room | grep "$SEARCHTYPE"` != "@" ]; then printf "			(\e[31mroom\e[39m) $room_id [\e[2m$level_id.$map_id.$scene_id.$room_id\e[22m]\n"; fi

          persons_dir=$room_dir/persons
          for person in $persons_dir/*.meta; do #persons
            if [ ! -f $person ]; then continue; fi
            person_dir=`dir $person`
            person_id=`id $person`
            if [ @`echo $person_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo person | grep "$SEARCHTYPE"` != "@" ]; then printf "				(\e[36mperson\e[39m) $person_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$person_id\e[22m]\n"; fi

            speaks_dir=$person_dir/speaks
            for speak in $speaks_dir/*.meta; do #speaks
              if [ ! -f $speak ]; then continue; fi
              speak_dir=`dir $speak`
              speak_id=`id $speak`
              if [ @`echo $speak_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo speak | grep "$SEARCHTYPE"` != "@" ]; then printf "					(\e[32mspeak\e[39m) $speak_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$person_id.$speak_id\e[22m]\n"; fi

              options_dir=$speak_dir/options
              for option in $options_dir/*.meta; do #options
                if [ ! -f $option ]; then continue; fi
                option_dir=`dir $option`
                option_id=`id $option`
                if [ @`echo $option_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo option | grep "$SEARCHTYPE"` != "@" ]; then printf "						(\e[34moption\e[39m) $option_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$person_id.$speak_id.$option_id\e[22m]\n"; fi

              done

            done

          done

          objects_dir=$room_dir/objects
          for object in $objects_dir/*.meta; do #objects
            if [ ! -f $object ]; then continue; fi
            object_dir=`dir $object`
            object_id=`id $object`
            if [ @`echo $object_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo object | grep "$SEARCHTYPE"` != "@" ]; then printf "				(\e[35mobject\e[39m) $object_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$object_id\e[22m]\n"; fi

            views_dir=$object_dir/views
            for view in $views_dir/*.meta; do #views
              if [ ! -f $view ]; then continue; fi
              view_dir=`dir $view`
              view_id=`id $view`
              if [ @`echo $view_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo view | grep "$SEARCHTYPE"` != "@" ]; then printf "					(\e[36mview\e[39m) $view_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$object_id.$view_id\e[22m]\n"; fi

              zones_dir=$view_dir/zones
              for zone in $zones_dir/*.meta; do #zones
                if [ ! -f $zone ]; then continue; fi
                zone_dir=`dir $zone`
                zone_id=`id $zone`
                if [ @`echo $zone_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo zone | grep "$SEARCHTYPE"` != "@" ]; then printf "						(\e[31mzone\e[39m) $zone_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$object_id.$view_id.$zone_id\e[22m]\n"; fi

              done

            done

          done

          portholes_dir=$room_dir/portholes
          for porthole in $portholes_dir/*.meta; do #portholes
            if [ ! -f $porthole ]; then continue; fi
            porthole_dir=`dir $porthole`
            porthole_id=`id $porthole`
            if [ @`echo $porthole_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo porthole | grep "$SEARCHTYPE"` != "@" ]; then printf "				(\e[33mporthole\e[39m) $porthole_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$porthole_id\e[22m]\n"; fi

          done

          wildcards_dir=$room_dir/wildcards
          for wildcard in $wildcards_dir/*.meta; do #wildcards
            if [ ! -f $wildcard ]; then continue; fi
            wildcard_dir=`dir $wildcard`
            wildcard_id=`id $wildcard`
            if [ @`echo $wildcard_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo wildcard | grep "$SEARCHTYPE"` != "@" ]; then printf "				(\e[32mwildcard\e[39m) $wildcard_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$wildcard_id\e[22m]\n"; fi

          done

          inerts_dir=$room_dir/inerts
          for inert in $inerts_dir/*.meta; do #inerts
            if [ ! -f $inert ]; then continue; fi
            inert_dir=`dir $inert`
            inert_id=`id $inert`
            if [ @`echo $inert_id | grep "$SEARCHTERM"` != "@" ] && [ @`echo inert | grep "$SEARCHTYPE"` != "@" ]; then printf "				(\e[32minert\e[39m) $inert_id [\e[2m$level_id.$map_id.$scene_id.$room_id.$inert_id\e[22m]\n"; fi

          done

        done

      done

    done

  done
fi

