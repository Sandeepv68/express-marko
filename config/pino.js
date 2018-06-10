/**
 * Pino Logger configuration
 */
const pinoConfig = {
    /**
     * safe (boolean): avoid error caused by circular references in the object tree. Default: true.
     * */
    safe: true,

    /**
     * name (string): the name of the logger. Default: undefined.
     * */
    name: 'Express Marko',

    /**
     * serializers (object): an object containing functions for custom serialization of objects. These functions should
     * return an JSONifiable object and they should never throw. When logging an object, each top-level property
     * matching the exact key of a serializer will be serialized using the defined serializer.
     * */
    //serializers : {},

    /**
     * timestamp (boolean|function): Enables or disables the inclusion of a timestamp in the log message. If a function
     * is supplied, it must synchronously return a JSON string representation of the time, e.g. ,"time":1493426328206
     * (which is the default). If set to false, no timestamp will be included in the output. See stdTimeFunctions for a
     * set of available functions for passing in as a value for this option. Caution: any sort of formatted time will
     * significantly slow down Pino's performance.
     */
    timestamp: true,

    /**
     * slowtime (boolean): Outputs ISO time stamps ('2016-03-09T15:18:53.889Z') instead of Epoch time stamps
     * (1457536759176). WARNING: This option carries a 25% performance drop. We recommend using default Epoch
     * timestamps and transforming logs after if required. The pino -t command will do this for you (see CLI).
     * Default: false.
     * Deprecation: this option is scheduled to be removed in Pino 5.0.0.
     * Use timestamp: pino.stdTimeFunctions.slowTime instead.
     */
    slowtime: false,

    /**
     * extreme (boolean): Enables extreme mode, yields an additional 60% performance (from 250ms down to 100ms per
     * 10000 ops). There are trade-off's should be understood before usage. See Extreme mode explained. Default: false.
     */
    extreme: false,


    /**
     * level (string): one of 'fatal', 'error', 'warn', 'info', 'debug', 'trace'; also 'silent' is supported to disable
     * logging. Any other value defines a custom level and requires supplying a level value via levelVal.
     * Default: 'info'.
     */
    level: 'info',

    /**
     * levelVal (integer): when defining a custom log level via level, set to an integer value to define the new level.
     * Default: undefined.
     */
    //levelVal : 0,


    /**
     * messageKey (string): the string key for the 'message' in the JSON object. Default msg.
     */
    messageKey: 'msg',

    /**
     * prettyPrint (boolean|object): enables pino.pretty. This is intended for non-production configurations.
     * This may be set to a configuration object as outlined in pino.pretty. Default: false.
     */
    prettyPrint: false,

    /**
     * onTerminated (function): this function will be invoked during process shutdown when extreme is set to true.
     * The signature of the function is onTerminated(eventName, err). If you do not specify a function, Pino will
     * invoke process.exit(0) when no error has occurred, and process.exit(1) otherwise. If you do specify a function,
     * it is up to you to terminate the process; you must perform only synchronous operations at this point.
     * See Extreme mode explained for more detail.
     */
    //onTerminated: function(){ process.exit(0) },


    /**
     * enabled (boolean): enables logging. Default: true
     */
    enabled: true


    /**
     * browser (Object): browser only, may have asObject and write keys, see Pino in the Browser
     */
    //browser: {}

};
module.exports = pinoConfig;