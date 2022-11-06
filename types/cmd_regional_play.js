"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerDeathZoneNotify = exports.DeathZoneInfoNotify = exports.DeathZoneInfo = exports.RegionalPlayInfoNotify = exports.RegionalPlayVar = exports.PlayerDeathZoneNotify_CmdId = exports.DeathZoneInfoNotify_CmdId = exports.RegionalPlayInfoNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.RegionalPlayInfoNotify.CmdId
 */
var RegionalPlayInfoNotify_CmdId;
(function (RegionalPlayInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RegionalPlayInfoNotify_CmdId[RegionalPlayInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6276;
     */
    RegionalPlayInfoNotify_CmdId[RegionalPlayInfoNotify_CmdId["CMD_ID"] = 6276] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    RegionalPlayInfoNotify_CmdId[RegionalPlayInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    RegionalPlayInfoNotify_CmdId[RegionalPlayInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(RegionalPlayInfoNotify_CmdId = exports.RegionalPlayInfoNotify_CmdId || (exports.RegionalPlayInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.DeathZoneInfoNotify.CmdId
 */
var DeathZoneInfoNotify_CmdId;
(function (DeathZoneInfoNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeathZoneInfoNotify_CmdId[DeathZoneInfoNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6268;
     */
    DeathZoneInfoNotify_CmdId[DeathZoneInfoNotify_CmdId["CMD_ID"] = 6268] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    DeathZoneInfoNotify_CmdId[DeathZoneInfoNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    DeathZoneInfoNotify_CmdId[DeathZoneInfoNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(DeathZoneInfoNotify_CmdId = exports.DeathZoneInfoNotify_CmdId || (exports.DeathZoneInfoNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.PlayerDeathZoneNotify.CmdId
 */
var PlayerDeathZoneNotify_CmdId;
(function (PlayerDeathZoneNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerDeathZoneNotify_CmdId[PlayerDeathZoneNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 6275;
     */
    PlayerDeathZoneNotify_CmdId[PlayerDeathZoneNotify_CmdId["CMD_ID"] = 6275] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    PlayerDeathZoneNotify_CmdId[PlayerDeathZoneNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    PlayerDeathZoneNotify_CmdId[PlayerDeathZoneNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(PlayerDeathZoneNotify_CmdId = exports.PlayerDeathZoneNotify_CmdId || (exports.PlayerDeathZoneNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class RegionalPlayVar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionalPlayVar", [
            { no: 15, name: "type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "max_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ },
            { no: 10, name: "base_value", kind: "scalar", opt: true, T: 2 /*ScalarType.FLOAT*/ }
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
                case /* optional uint32 type */ 15:
                    message.type = reader.uint32();
                    break;
                case /* optional float max_value */ 11:
                    message.maxValue = reader.float();
                    break;
                case /* optional float value */ 3:
                    message.value = reader.float();
                    break;
                case /* optional float base_value */ 10:
                    message.baseValue = reader.float();
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
        /* optional uint32 type = 15; */
        if (message.type !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.type);
        /* optional float max_value = 11; */
        if (message.maxValue !== undefined)
            writer.tag(11, runtime_1.WireType.Bit32).float(message.maxValue);
        /* optional float value = 3; */
        if (message.value !== undefined)
            writer.tag(3, runtime_1.WireType.Bit32).float(message.value);
        /* optional float base_value = 10; */
        if (message.baseValue !== undefined)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.baseValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionalPlayVar
 */
exports.RegionalPlayVar = new RegionalPlayVar$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegionalPlayInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.RegionalPlayInfoNotify", [
            { no: 5, name: "var_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.RegionalPlayVar },
            { no: 9, name: "play_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "is_enabled", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "play_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_in_region", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { varList: [] };
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
                case /* repeated com.midnights.game.RegionalPlayVar var_list */ 5:
                    message.varList.push(exports.RegionalPlayVar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* optional string play_name */ 9:
                    message.playName = reader.string();
                    break;
                case /* optional bool is_enabled */ 15:
                    message.isEnabled = reader.bool();
                    break;
                case /* optional uint32 play_type */ 7:
                    message.playType = reader.uint32();
                    break;
                case /* optional bool is_in_region */ 4:
                    message.isInRegion = reader.bool();
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
        /* repeated com.midnights.game.RegionalPlayVar var_list = 5; */
        for (let i = 0; i < message.varList.length; i++)
            exports.RegionalPlayVar.internalBinaryWrite(message.varList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional string play_name = 9; */
        if (message.playName !== undefined)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.playName);
        /* optional bool is_enabled = 15; */
        if (message.isEnabled !== undefined)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isEnabled);
        /* optional uint32 play_type = 7; */
        if (message.playType !== undefined)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.playType);
        /* optional bool is_in_region = 4; */
        if (message.isInRegion !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isInRegion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.RegionalPlayInfoNotify
 */
exports.RegionalPlayInfoNotify = new RegionalPlayInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeathZoneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeathZoneInfo", [
            { no: 9, name: "is_open", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional bool is_open */ 9:
                    message.isOpen = reader.bool();
                    break;
                case /* optional uint32 id */ 14:
                    message.id = reader.uint32();
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
        /* optional bool is_open = 9; */
        if (message.isOpen !== undefined)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isOpen);
        /* optional uint32 id = 14; */
        if (message.id !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeathZoneInfo
 */
exports.DeathZoneInfo = new DeathZoneInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeathZoneInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.DeathZoneInfoNotify", [
            { no: 8, name: "death_zone_info_list", kind: "message", repeat: 2 /*RepeatType.UNPACKED*/, T: () => exports.DeathZoneInfo }
        ]);
    }
    create(value) {
        const message = { deathZoneInfoList: [] };
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
                case /* repeated com.midnights.game.DeathZoneInfo death_zone_info_list */ 8:
                    message.deathZoneInfoList.push(exports.DeathZoneInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.DeathZoneInfo death_zone_info_list = 8; */
        for (let i = 0; i < message.deathZoneInfoList.length; i++)
            exports.DeathZoneInfo.internalBinaryWrite(message.deathZoneInfoList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DeathZoneInfoNotify
 */
exports.DeathZoneInfoNotify = new DeathZoneInfoNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerDeathZoneNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.PlayerDeathZoneNotify", [
            { no: 8, name: "cur_death_zone_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 cur_death_zone_id */ 8:
                    message.curDeathZoneId = reader.uint32();
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
        /* optional uint32 cur_death_zone_id = 8; */
        if (message.curDeathZoneId !== undefined)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.curDeathZoneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PlayerDeathZoneNotify
 */
exports.PlayerDeathZoneNotify = new PlayerDeathZoneNotify$Type();
