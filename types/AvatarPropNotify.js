"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarPropNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarPropNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarPropNotify", [
            { no: 1, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ } }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n, propMap: {} };
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
                case /* uint64 avatar_guid */ 1:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* map<uint32, int64> prop_map */ 8:
                    this.binaryReadMap8(message.propMap, reader, options);
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
    binaryReadMap8(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int64().toBigInt();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarPropNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? 0n;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 avatar_guid = 1; */
        if (message.avatarGuid !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* map<uint32, int64> prop_map = 8; */
        for (let k of Object.keys(message.propMap))
            writer.tag(8, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int64(message.propMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarPropNotify
 */
exports.AvatarPropNotify = new AvatarPropNotify$Type();
