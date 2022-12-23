"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryIslandPartyRaftInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStartSource_1 = require("./GalleryStartSource");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIslandPartyRaftInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryIslandPartyRaftInfo", [
            { no: 12, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_FBACMOFGPGJ", kind: "scalar", jsonName: "Unk3300FBACMOFGPGJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_HHEKIPECDAK", kind: "scalar", jsonName: "Unk3300HHEKIPECDAK", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "start_source", kind: "enum", T: () => ["GalleryStartSource", GalleryStartSource_1.GalleryStartSource, "GALLERY_START_SOURCE_"] },
            { no: 13, name: "Unk3300_HNECEGNMKNK", kind: "scalar", jsonName: "Unk3300HNECEGNMKNK", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { coin: 0, unk3300FBACMOFGPGJ: 0, pointId: 0, unk3300HHEKIPECDAK: 0, startSource: 0, unk3300HNECEGNMKNK: 0 };
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
                case /* uint32 coin */ 12:
                    message.coin = reader.uint32();
                    break;
                case /* uint32 Unk3300_FBACMOFGPGJ = 6 [json_name = "Unk3300FBACMOFGPGJ"];*/ 6:
                    message.unk3300FBACMOFGPGJ = reader.uint32();
                    break;
                case /* uint32 point_id */ 10:
                    message.pointId = reader.uint32();
                    break;
                case /* uint32 Unk3300_HHEKIPECDAK = 14 [json_name = "Unk3300HHEKIPECDAK"];*/ 14:
                    message.unk3300HHEKIPECDAK = reader.uint32();
                    break;
                case /* GalleryStartSource start_source */ 7:
                    message.startSource = reader.int32();
                    break;
                case /* uint32 Unk3300_HNECEGNMKNK = 13 [json_name = "Unk3300HNECEGNMKNK"];*/ 13:
                    message.unk3300HNECEGNMKNK = reader.uint32();
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
        /* uint32 coin = 12; */
        if (message.coin !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.coin);
        /* uint32 Unk3300_FBACMOFGPGJ = 6 [json_name = "Unk3300FBACMOFGPGJ"]; */
        if (message.unk3300FBACMOFGPGJ !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300FBACMOFGPGJ);
        /* uint32 point_id = 10; */
        if (message.pointId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.pointId);
        /* uint32 Unk3300_HHEKIPECDAK = 14 [json_name = "Unk3300HHEKIPECDAK"]; */
        if (message.unk3300HHEKIPECDAK !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300HHEKIPECDAK);
        /* GalleryStartSource start_source = 7; */
        if (message.startSource !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.startSource);
        /* uint32 Unk3300_HNECEGNMKNK = 13 [json_name = "Unk3300HNECEGNMKNK"]; */
        if (message.unk3300HNECEGNMKNK !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300HNECEGNMKNK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryIslandPartyRaftInfo
 */
exports.SceneGalleryIslandPartyRaftInfo = new SceneGalleryIslandPartyRaftInfo$Type();
