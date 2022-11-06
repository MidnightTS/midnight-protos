"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupLinkMarkUpdateNotify = exports.GroupLinkDeleteNotify = exports.GroupLinkChangeNotify = exports.GroupLinkAllNotify = exports.GroupLinkBundle = exports.GroupLinkMarkUpdateNotify_CmdId = exports.GroupLinkDeleteNotify_CmdId = exports.GroupLinkChangeNotify_CmdId = exports.GroupLinkAllNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const define_1 = require("./define");
/**
 * @generated from protobuf enum com.midnights.game.GroupLinkAllNotify.CmdId
 */
var GroupLinkAllNotify_CmdId;
(function (GroupLinkAllNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkAllNotify_CmdId[GroupLinkAllNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5776;
     */
    GroupLinkAllNotify_CmdId[GroupLinkAllNotify_CmdId["CMD_ID"] = 5776] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkAllNotify_CmdId[GroupLinkAllNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GroupLinkAllNotify_CmdId[GroupLinkAllNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GroupLinkAllNotify_CmdId = exports.GroupLinkAllNotify_CmdId || (exports.GroupLinkAllNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GroupLinkChangeNotify.CmdId
 */
var GroupLinkChangeNotify_CmdId;
(function (GroupLinkChangeNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkChangeNotify_CmdId[GroupLinkChangeNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5768;
     */
    GroupLinkChangeNotify_CmdId[GroupLinkChangeNotify_CmdId["CMD_ID"] = 5768] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkChangeNotify_CmdId[GroupLinkChangeNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GroupLinkChangeNotify_CmdId[GroupLinkChangeNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GroupLinkChangeNotify_CmdId = exports.GroupLinkChangeNotify_CmdId || (exports.GroupLinkChangeNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GroupLinkDeleteNotify.CmdId
 */
var GroupLinkDeleteNotify_CmdId;
(function (GroupLinkDeleteNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkDeleteNotify_CmdId[GroupLinkDeleteNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5775;
     */
    GroupLinkDeleteNotify_CmdId[GroupLinkDeleteNotify_CmdId["CMD_ID"] = 5775] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkDeleteNotify_CmdId[GroupLinkDeleteNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GroupLinkDeleteNotify_CmdId[GroupLinkDeleteNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GroupLinkDeleteNotify_CmdId = exports.GroupLinkDeleteNotify_CmdId || (exports.GroupLinkDeleteNotify_CmdId = {}));
/**
 * @generated from protobuf enum com.midnights.game.GroupLinkMarkUpdateNotify.CmdId
 */
var GroupLinkMarkUpdateNotify_CmdId;
(function (GroupLinkMarkUpdateNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkMarkUpdateNotify_CmdId[GroupLinkMarkUpdateNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 5757;
     */
    GroupLinkMarkUpdateNotify_CmdId[GroupLinkMarkUpdateNotify_CmdId["CMD_ID"] = 5757] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    GroupLinkMarkUpdateNotify_CmdId[GroupLinkMarkUpdateNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    GroupLinkMarkUpdateNotify_CmdId[GroupLinkMarkUpdateNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(GroupLinkMarkUpdateNotify_CmdId = exports.GroupLinkMarkUpdateNotify_CmdId || (exports.GroupLinkMarkUpdateNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GroupLinkBundle$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GroupLinkBundle", [
            { no: 4, name: "center", kind: "message", T: () => define_1.Vector },
            { no: 12, name: "is_activated", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "bundle_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "is_show_mark", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "scene_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "radius", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional com.midnights.game.Vector center */ 4:
                    message.center = define_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.center);
                    break;
                case /* optional bool is_activated */ 12:
                    message.isActivated = reader.bool();
                    break;
                case /* optional uint32 bundle_id */ 3:
                    message.bundleId = reader.uint32();
                    break;
                case /* optional bool is_show_mark */ 14:
                    message.isShowMark = reader.bool();
                    break;
                case /* optional uint32 scene_id */ 5:
                    message.sceneId = reader.uint32();
                    break;
                case /* optional uint32 radius */ 1:
                    message.radius = reader.uint32();
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
        /* optional com.midnights.game.Vector center = 4; */
        if (message.center)
            define_1.Vector.internalBinaryWrite(message.center, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional bool is_activated = 12; */
        if (message.isActivated !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isActivated);
        /* optional uint32 bundle_id = 3; */
        if (message.bundleId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.bundleId);
        /* optional bool is_show_mark = 14; */
        if (message.isShowMark !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isShowMark);
        /* optional uint32 scene_id = 5; */
        if (message.sceneId !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* optional uint32 radius = 1; */
        if (message.radius !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.radius);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GroupLinkBundle
 */
exports.GroupLinkBundle = new GroupLinkBundle$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroupLinkAllNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GroupLinkAllNotify", [
            { no: 5, name: "bundle_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.GroupLinkBundle }
        ]);
    }
    create(value) {
        const message = { bundleList: [] };
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
                case /* repeated com.midnights.game.GroupLinkBundle bundle_list */ 5:
                    message.bundleList.push(exports.GroupLinkBundle.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated com.midnights.game.GroupLinkBundle bundle_list = 5; */
        for (let i = 0; i < message.bundleList.length; i++)
            exports.GroupLinkBundle.internalBinaryWrite(message.bundleList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GroupLinkAllNotify
 */
exports.GroupLinkAllNotify = new GroupLinkAllNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroupLinkChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GroupLinkChangeNotify", [
            { no: 8, name: "bundle", kind: "message", T: () => exports.GroupLinkBundle }
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
                case /* optional com.midnights.game.GroupLinkBundle bundle */ 8:
                    message.bundle = exports.GroupLinkBundle.internalBinaryRead(reader, reader.uint32(), options, message.bundle);
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
        /* optional com.midnights.game.GroupLinkBundle bundle = 8; */
        if (message.bundle)
            exports.GroupLinkBundle.internalBinaryWrite(message.bundle, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GroupLinkChangeNotify
 */
exports.GroupLinkChangeNotify = new GroupLinkChangeNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroupLinkDeleteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GroupLinkDeleteNotify", [
            { no: 12, name: "bundle_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 bundle_id */ 12:
                    message.bundleId = reader.uint32();
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
        /* optional uint32 bundle_id = 12; */
        if (message.bundleId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.bundleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GroupLinkDeleteNotify
 */
exports.GroupLinkDeleteNotify = new GroupLinkDeleteNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GroupLinkMarkUpdateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.GroupLinkMarkUpdateNotify", [
            { no: 11, name: "bundle", kind: "message", T: () => exports.GroupLinkBundle }
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
                case /* optional com.midnights.game.GroupLinkBundle bundle */ 11:
                    message.bundle = exports.GroupLinkBundle.internalBinaryRead(reader, reader.uint32(), options, message.bundle);
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
        /* optional com.midnights.game.GroupLinkBundle bundle = 11; */
        if (message.bundle)
            exports.GroupLinkBundle.internalBinaryWrite(message.bundle, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.GroupLinkMarkUpdateNotify
 */
exports.GroupLinkMarkUpdateNotify = new GroupLinkMarkUpdateNotify$Type();
