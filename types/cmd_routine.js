"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldRoutineTypeCloseNotify = exports.WorldRoutineChangeNotify = exports.WorldRoutineTypeRefreshNotify = exports.WorldAllRoutineTypeNotify = exports.WorldRoutineTypeInfo = exports.WorldRoutineInfo = exports.PlayerRoutineDataNotify = exports.PlayerRoutineInfo = exports.WorldRoutineTypeCloseNotify_CmdId = exports.WorldRoutineChangeNotify_CmdId = exports.WorldRoutineTypeRefreshNotify_CmdId = exports.WorldAllRoutineTypeNotify_CmdId = exports.PlayerRoutineDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.PlayerRoutineDataNotify.CmdId
 */
var PlayerRoutineDataNotify_CmdId;
(function (PlayerRoutineDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRoutineDataNotify_CmdId[PlayerRoutineDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3526;
     */
    PlayerRoutineDataNotify_CmdId[PlayerRoutineDataNotify_CmdId["CMD_ID"] = 3526] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerRoutineDataNotify_CmdId[PlayerRoutineDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerRoutineDataNotify_CmdId[PlayerRoutineDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerRoutineDataNotify_CmdId = exports.PlayerRoutineDataNotify_CmdId || (exports.PlayerRoutineDataNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldAllRoutineTypeNotify.CmdId
 */
var WorldAllRoutineTypeNotify_CmdId;
(function (WorldAllRoutineTypeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldAllRoutineTypeNotify_CmdId[WorldAllRoutineTypeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3518;
     */
    WorldAllRoutineTypeNotify_CmdId[WorldAllRoutineTypeNotify_CmdId["CMD_ID"] = 3518] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldAllRoutineTypeNotify_CmdId[WorldAllRoutineTypeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldAllRoutineTypeNotify_CmdId[WorldAllRoutineTypeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldAllRoutineTypeNotify_CmdId = exports.WorldAllRoutineTypeNotify_CmdId || (exports.WorldAllRoutineTypeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldRoutineTypeRefreshNotify.CmdId
 */
var WorldRoutineTypeRefreshNotify_CmdId;
(function (WorldRoutineTypeRefreshNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldRoutineTypeRefreshNotify_CmdId[WorldRoutineTypeRefreshNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3525;
     */
    WorldRoutineTypeRefreshNotify_CmdId[WorldRoutineTypeRefreshNotify_CmdId["CMD_ID"] = 3525] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldRoutineTypeRefreshNotify_CmdId[WorldRoutineTypeRefreshNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldRoutineTypeRefreshNotify_CmdId[WorldRoutineTypeRefreshNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldRoutineTypeRefreshNotify_CmdId = exports.WorldRoutineTypeRefreshNotify_CmdId || (exports.WorldRoutineTypeRefreshNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldRoutineChangeNotify.CmdId
 */
var WorldRoutineChangeNotify_CmdId;
(function (WorldRoutineChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldRoutineChangeNotify_CmdId[WorldRoutineChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3507;
     */
    WorldRoutineChangeNotify_CmdId[WorldRoutineChangeNotify_CmdId["CMD_ID"] = 3507] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldRoutineChangeNotify_CmdId[WorldRoutineChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldRoutineChangeNotify_CmdId[WorldRoutineChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldRoutineChangeNotify_CmdId = exports.WorldRoutineChangeNotify_CmdId || (exports.WorldRoutineChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.WorldRoutineTypeCloseNotify.CmdId
 */
var WorldRoutineTypeCloseNotify_CmdId;
(function (WorldRoutineTypeCloseNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldRoutineTypeCloseNotify_CmdId[WorldRoutineTypeCloseNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 3502;
     */
    WorldRoutineTypeCloseNotify_CmdId[WorldRoutineTypeCloseNotify_CmdId["CMD_ID"] = 3502] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    WorldRoutineTypeCloseNotify_CmdId[WorldRoutineTypeCloseNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    WorldRoutineTypeCloseNotify_CmdId[WorldRoutineTypeCloseNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(WorldRoutineTypeCloseNotify_CmdId = exports.WorldRoutineTypeCloseNotify_CmdId || (exports.WorldRoutineTypeCloseNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PlayerRoutineInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerRoutineInfo", [
            { no: 8, name: "routine_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "finished_num", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 routine_type */ 8:
                    message.routineType = reader.uint32();
                    break;
                case /* optional uint32 finished_num */ 15:
                    message.finishedNum = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 routine_type = 8; */
        if (message.routineType !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.routineType);
        /* optional uint32 finished_num = 15; */
        if (message.finishedNum !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.finishedNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerRoutineInfo
 */
exports.PlayerRoutineInfo = new PlayerRoutineInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerRoutineDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerRoutineDataNotify", [
            { no: 11, name: "routine_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.PlayerRoutineInfo }
        ]);
    }
    create(value) {
        const message = { routineInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.PlayerRoutineInfo routine_info_list */ 11:
                    message.routineInfoList.push(exports.PlayerRoutineInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.PlayerRoutineInfo routine_info_list = 11; */
        for (let i = 0; i < message.routineInfoList.length; i++)
            exports.PlayerRoutineInfo.internalBinaryWrite(message.routineInfoList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerRoutineDataNotify
 */
exports.PlayerRoutineDataNotify = new PlayerRoutineDataNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldRoutineInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldRoutineInfo", [
            { no: 4, name: "progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_finished", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "finish_progress", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "routine_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 progress */ 4:
                    message.progress = reader.uint32();
                    break;
                case /* optional bool is_finished */ 14:
                    message.isFinished = reader.bool();
                    break;
                case /* optional uint32 finish_progress */ 3:
                    message.finishProgress = reader.uint32();
                    break;
                case /* optional uint32 routine_id */ 11:
                    message.routineId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 progress = 4; */
        if (message.progress !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.progress);
        /* optional bool is_finished = 14; */
        if (message.isFinished !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isFinished);
        /* optional uint32 finish_progress = 3; */
        if (message.finishProgress !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.finishProgress);
        /* optional uint32 routine_id = 11; */
        if (message.routineId !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.routineId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldRoutineInfo
 */
exports.WorldRoutineInfo = new WorldRoutineInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldRoutineTypeInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldRoutineTypeInfo", [
            { no: 13, name: "routine_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "next_refresh_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "world_routine_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WorldRoutineInfo }
        ]);
    }
    create(value) {
        const message = { worldRoutineInfoList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 routine_type */ 13:
                    message.routineType = reader.uint32();
                    break;
                case /* optional uint32 next_refresh_time */ 12:
                    message.nextRefreshTime = reader.uint32();
                    break;
                case /* repeated com.midnights.game.WorldRoutineInfo world_routine_info_list */ 3:
                    message.worldRoutineInfoList.push(exports.WorldRoutineInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 routine_type = 13; */
        if (message.routineType !== undefined)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.routineType);
        /* optional uint32 next_refresh_time = 12; */
        if (message.nextRefreshTime !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.nextRefreshTime);
        /* repeated com.midnights.game.WorldRoutineInfo world_routine_info_list = 3; */
        for (let i = 0; i < message.worldRoutineInfoList.length; i++)
            exports.WorldRoutineInfo.internalBinaryWrite(message.worldRoutineInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldRoutineTypeInfo
 */
exports.WorldRoutineTypeInfo = new WorldRoutineTypeInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldAllRoutineTypeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldAllRoutineTypeNotify", [
            { no: 12, name: "world_routine_type_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.WorldRoutineTypeInfo }
        ]);
    }
    create(value) {
        const message = { worldRoutineTypeList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.midnights.game.WorldRoutineTypeInfo world_routine_type_list */ 12:
                    message.worldRoutineTypeList.push(exports.WorldRoutineTypeInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated com.midnights.game.WorldRoutineTypeInfo world_routine_type_list = 12; */
        for (let i = 0; i < message.worldRoutineTypeList.length; i++)
            exports.WorldRoutineTypeInfo.internalBinaryWrite(message.worldRoutineTypeList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldAllRoutineTypeNotify
 */
exports.WorldAllRoutineTypeNotify = new WorldAllRoutineTypeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldRoutineTypeRefreshNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldRoutineTypeRefreshNotify", [
            { no: 7, name: "world_routine_type", kind: "message", T: () => exports.WorldRoutineTypeInfo }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.WorldRoutineTypeInfo world_routine_type */ 7:
                    message.worldRoutineType = exports.WorldRoutineTypeInfo.internalBinaryRead(reader, reader.uint32(), options, message.worldRoutineType);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.WorldRoutineTypeInfo world_routine_type = 7; */
        if (message.worldRoutineType)
            exports.WorldRoutineTypeInfo.internalBinaryWrite(message.worldRoutineType, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldRoutineTypeRefreshNotify
 */
exports.WorldRoutineTypeRefreshNotify = new WorldRoutineTypeRefreshNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldRoutineChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldRoutineChangeNotify", [
            { no: 3, name: "routine_info", kind: "message", T: () => exports.WorldRoutineInfo },
            { no: 11, name: "routine_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional com.midnights.game.WorldRoutineInfo routine_info */ 3:
                    message.routineInfo = exports.WorldRoutineInfo.internalBinaryRead(reader, reader.uint32(), options, message.routineInfo);
                    break;
                case /* optional uint32 routine_type */ 11:
                    message.routineType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional com.midnights.game.WorldRoutineInfo routine_info = 3; */
        if (message.routineInfo)
            exports.WorldRoutineInfo.internalBinaryWrite(message.routineInfo, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 routine_type = 11; */
        if (message.routineType !== undefined)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.routineType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldRoutineChangeNotify
 */
exports.WorldRoutineChangeNotify = new WorldRoutineChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldRoutineTypeCloseNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.WorldRoutineTypeCloseNotify", [
            { no: 7, name: "routine_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 routine_type */ 7:
                    message.routineType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* optional uint32 routine_type = 7; */
        if (message.routineType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.routineType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.WorldRoutineTypeCloseNotify
 */
exports.WorldRoutineTypeCloseNotify = new WorldRoutineTypeCloseNotify$Type();
