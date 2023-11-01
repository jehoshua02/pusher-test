ROLE=$1
set -a; source .env; set +a; node $ROLE.js
