"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryHomeSeekFurnitureInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryHomeSeekFurnitureInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryHomeSeekFurnitureInfo", [
            { no: 3, name: "Unk3300_DAEEBIEAOMN", kind: "scalar", jsonName: "Unk3300DAEEBIEAOMN", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_ENKOGPIEHFD", kind: "scalar", jsonName: "Unk3300ENKOGPIEHFD", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "player_score_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 12, name: "Unk3300_LGEAPLJCJFH", kind: "scalar", jsonName: "Unk3300LGEAPLJCJFH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300DAEEBIEAOMN: 0, unk3300ENKOGPIEHFD: 0, playerScoreMap: {}, unk3300LGEAPLJCJFH: 0 };
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
                case /* uint32 Unk3300_DAEEBIEAOMN = 3 [json_name = "Unk3300DAEEBIEAOMN"];*/ 3:
                    message.unk3300DAEEBIEAOMN = reader.uint32();
                    break;
                case /* uint32 Unk3300_ENKOGPIEHFD = 14 [json_name = "Unk3300ENKOGPIEHFD"];*/ 14:
                    message.unk3300ENKOGPIEHFD = reader.uint32();
                    break;
                case /* map<uint32, uint32> player_score_map */ 10:
                    this.binaryReadMap10(message.playerScoreMap, reader, options);
                    break;
                case /* uint32 Unk3300_LGEAPLJCJFH = 12 [json_name = "Unk3300LGEAPLJCJFH"];*/ 12:
                    message.unk3300LGEAPLJCJFH = reader.uint32();
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
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SceneGalleryHomeSeekFurnitureInfo.player_score_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_DAEEBIEAOMN = 3 [json_name = "Unk3300DAEEBIEAOMN"]; */
        if (message.unk3300DAEEBIEAOMN !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300DAEEBIEAOMN);
        /* uint32 Unk3300_ENKOGPIEHFD = 14 [json_name = "Unk3300ENKOGPIEHFD"]; */
        if (message.unk3300ENKOGPIEHFD !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300ENKOGPIEHFD);
        /* map<uint32, uint32> player_score_map = 10; */
        for (let k of Object.keys(message.playerScoreMap))
            writer.tag(10, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.playerScoreMap[k]).join();
        /* uint32 Unk3300_LGEAPLJCJFH = 12 [json_name = "Unk3300LGEAPLJCJFH"]; */
        if (message.unk3300LGEAPLJCJFH !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.unk3300LGEAPLJCJFH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryHomeSeekFurnitureInfo
 */
exports.SceneGalleryHomeSeekFurnitureInfo = new SceneGalleryHomeSeekFurnitureInfo$Type();
