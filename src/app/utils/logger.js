const {createLogger, format, transports} = require('winston')
const {label} = format


const prettyFormatter = format.combine(
    format.printf(
        info => `${info.timestamp} ${info.label} [${info.level}]: ${info.message}`
    )
)
const logConfiguration = {
    format: format.combine(
        label({label: 'Dummy App'}),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        prettyFormatter
    ),
    transports: [
        new transports.Console()/*,
        new transports.File({filename: 'stdout.log'})*/
    ]
};

const logger = createLogger(logConfiguration);

module.exports = logger