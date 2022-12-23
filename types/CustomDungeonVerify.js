"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonVerify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonVerify$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonVerify", [
            { no: 3, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "region", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "timestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "dungeon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "lang", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { uid: 0, region: "", timestamp: 0, dungeonGuid: 0n, lang: 0 };
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
                case /* uint32 uid */ 3:
                    message.uid = reader.uint32();
                    break;
                case /* string region */ 13:
                    message.region = reader.string();
                    break;
                case /* uint32 timestamp */ 5:
                    message.timestamp = reader.uint32();
                    break;
                case /* uint64 dungeon_guid */ 1:
                    message.dungeonGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 lang */ 6:
                    message.lang = reader.uint32();
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
        /* uint32 uid = 3; */
        if (message.uid !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.uid);
        /* string region = 13; */
        if (message.region !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.region);
        /* uint32 timestamp = 5; */
        if (message.timestamp !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.timestamp);
        /* uint64 dungeon_guid = 1; */
        if (message.dungeonGuid !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.dungeonGuid);
        /* uint32 lang = 6; */
        if (message.lang !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.lang);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonVerify
 */
exports.CustomDungeonVerify = new CustomDungeonVerify$Type();
