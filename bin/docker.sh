#!/bin/bash
function _docker {
    /usr/bin/env docker "$@"
}

function _compose {
    /usr/bin/env docker-compose "$@"
}

case ${1} in
    start)
        _compose up -d --force-recreate && \
            _compose logs -f --tail 100 | grep -iE --color=auto "(${LOG_TERMS})|$"
        ;;

    stop)
        _compose stop --time 30
        ;;

    logs)
        _compose logs -f --tail 100 | grep -iE --color=auto "(${LOG_TERMS})|$"
        ;;

    sh)
        _docker exec -e COLUMNS="`tput cols`" -e LINES="`tput lines`" -it --detach-keys 'ctrl-q,q' $(_compose ps | grep _app_ | awk '{ print $1 }') sh
        ;;
esac

