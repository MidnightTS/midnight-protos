"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllShareCDDataNotify = exports.ShareCDInfo = exports.AllShareCDDataNotify_CmdId = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.midnights.game.AllShareCDDataNotify.CmdId
 */
var AllShareCDDataNotify_CmdId;
(function (AllShareCDDataNotify_CmdId) {
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllShareCDDataNotify_CmdId[AllShareCDDataNotify_CmdId["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: CMD_ID = 9072;
     */
    AllShareCDDataNotify_CmdId[AllShareCDDataNotify_CmdId["CMD_ID"] = 9072] = "CMD_ID";
    /**
     * @generated from protobuf enum value: NONE = 0;
     */
    AllShareCDDataNotify_CmdId[AllShareCDDataNotify_CmdId["ENET_CHANNEL_ID"] = 0] = "ENET_CHANNEL_ID";
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    AllShareCDDataNotify_CmdId[AllShareCDDataNotify_CmdId["ENET_IS_RELIABLE"] = 1] = "ENET_IS_RELIABLE";
})(AllShareCDDataNotify_CmdId = exports.AllShareCDDataNotify_CmdId || (exports.AllShareCDDataNotify_CmdId = {}));
// @generated message type with reflection information, may provide speed optimized methods
class ShareCDInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShareCDInfo", [
            { no: 2, name: "index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cd_start_time", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "share_cd_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 index */ 2:
                    message.index = reader.uint32();
                    break;
                case /* optional uint64 cd_start_time */ 14:
                    message.cdStartTime = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 share_cd_id */ 12:
                    message.shareCdId = reader.uint32();
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
        /* optional uint32 index = 2; */
        if (message.index !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.index);
        /* optional uint64 cd_start_time = 14; */
        if (message.cdStartTime !== undefined)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.cdStartTime);
        /* optional uint32 share_cd_id = 12; */
        if (message.shareCdId !== undefined)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.shareCdId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShareCDInfo
 */
exports.ShareCDInfo = new ShareCDInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AllShareCDDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AllShareCDDataNotify", [
            { no: 2, name: "share_cd_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => exports.ShareCDInfo } }
        ]);
    }
    create(value) {
        const message = { shareCdInfoMap: {} };
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
                case /* map<uint32, com.midnights.game.ShareCDInfo> share_cd_info_map */ 2:
                    this.binaryReadMap2(message.shareCdInfoMap, reader, options);
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
    binaryReadMap2(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = exports.ShareCDInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.AllShareCDDataNotify.share_cd_info_map");
            }
        }
        map[key ?? 0] = val ?? exports.ShareCDInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, com.midnights.game.ShareCDInfo> share_cd_info_map = 2; */
        for (let k of Object.keys(message.shareCdInfoMap)) {
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            exports.ShareCDInfo.internalBinaryWrite(message.shareCdInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AllShareCDDataNotify
 */
exports.AllShareCDDataNotify = new AllShareCDDataNotify$Type();
