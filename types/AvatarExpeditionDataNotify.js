"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarExpeditionDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarExpeditionInfo_1 = require("./AvatarExpeditionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarExpeditionDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarExpeditionDataNotify", [
            { no: 15, name: "expedition_info_map", kind: "map", K: 4 /*ScalarType.UINT64*/, V: { kind: "message", T: () => AvatarExpeditionInfo_1.AvatarExpeditionInfo } }
        ]);
    }
    create(value) {
        const message = { expeditionInfoMap: {} };
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
                case /* map<uint64, AvatarExpeditionInfo> expedition_info_map */ 15:
                    this.binaryReadMap15(message.expeditionInfoMap, reader, options);
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
    binaryReadMap15(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint64().toString();
                    break;
                case 2:
                    val = AvatarExpeditionInfo_1.AvatarExpeditionInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AvatarExpeditionDataNotify.expedition_info_map");
            }
        }
        map[key ?? "0"] = val ?? AvatarExpeditionInfo_1.AvatarExpeditionInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint64, AvatarExpeditionInfo> expedition_info_map = 15; */
        for (let k of Object.keys(message.expeditionInfoMap)) {
            writer.tag(15, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint64(k);
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            AvatarExpeditionInfo_1.AvatarExpeditionInfo.internalBinaryWrite(message.expeditionInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarExpeditionDataNotify
 */
exports.AvatarExpeditionDataNotify = new AvatarExpeditionDataNotify$Type();
