#!/usr/bin/env bash

# Source: m-cli
# @see https://github.com/rgcr/m-cli

help() {
    cat<<__EOF__
    usage:  m network [ ls | list | location | help ]

    Examples:
      m network ls                          # list network interfaces
      m network location                    # get current location
      m network location ls                 # list locations
      m network location create XYZ         # create a location
      m network location delete XYZ         # delete a location
      m network location switch XYZ         # switch location
__EOF__

}

list_netservices() {
    networksetup -listallhardwareports | while IFS= read -r line; do
        # if it is a device we will print the ip in the next line
        if echo ${line} | grep -i "Device" >/dev/null 2>&1; then
            printf "${line}\nIP:$(ipconfig getifaddr $(echo ${line} | cut -d: -f2 2>/dev/null))\n"

        else
            printf "${line}\n"
        fi
    done
}


location() {
    case $1 in
        create)
            [ -z "$2" ] && help && exit 1;
            networksetup -createlocation $2
            ;;
        delete|rm)
            [ -z "$2" ] && help && exit 1;
            networksetup -deletelocation $2
            ;;
        switch)
            [ -z "$2" ] && help && exit 1;
            networksetup -switchtolocation $2
            ;;
        list|ls)
            echo "Locations: "
            networksetup -listlocations
            ;;
        *)
            echo "Current location: $(networksetup -getcurrentlocation)"
            ;;
    esac
}



case $1 in
    help)
        help
        ;;
    ls|list)
        list_netservices
        ;;
    location)
        shift
        location $@
        ;;
    *)
        help
        ;;
esac
