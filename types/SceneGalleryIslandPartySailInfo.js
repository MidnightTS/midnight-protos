"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryIslandPartySailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GalleryStartSource_1 = require("./GalleryStartSource");
const IslandPartySailStage_1 = require("./IslandPartySailStage");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryIslandPartySailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryIslandPartySailInfo", [
            { no: 5, name: "coin", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "Unk3300_HCJGDHEMBLM", kind: "scalar", jsonName: "Unk3300HCJGDHEMBLM", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_MJHMCAPGBIK", kind: "scalar", jsonName: "Unk3300MJHMCAPGBIK", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_PFCJODGNDCI", kind: "scalar", jsonName: "Unk3300PFCJODGNDCI", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "stage", kind: "enum", T: () => ["IslandPartySailStage", IslandPartySailStage_1.IslandPartySailStage, "ISLAND_PARTY_SAIL_STAGE_"] },
            { no: 10, name: "Unk3300_MJOIIJIBAHF", kind: "scalar", jsonName: "Unk3300MJOIIJIBAHF", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "start_source", kind: "enum", T: () => ["GalleryStartSource", GalleryStartSource_1.GalleryStartSource, "GALLERY_START_SOURCE_"] }
        ]);
    }
    create(value) {
        const message = { coin: 0, unk3300HCJGDHEMBLM: 0, unk3300MJHMCAPGBIK: 0, unk3300PFCJODGNDCI: 0, stage: 0, unk3300MJOIIJIBAHF: 0, startSource: 0 };
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
                case /* uint32 coin */ 5:
                    message.coin = reader.uint32();
                    break;
                case /* uint32 Unk3300_HCJGDHEMBLM = 4 [json_name = "Unk3300HCJGDHEMBLM"];*/ 4:
                    message.unk3300HCJGDHEMBLM = reader.uint32();
                    break;
                case /* uint32 Unk3300_MJHMCAPGBIK = 6 [json_name = "Unk3300MJHMCAPGBIK"];*/ 6:
                    message.unk3300MJHMCAPGBIK = reader.uint32();
                    break;
                case /* uint32 Unk3300_PFCJODGNDCI = 3 [json_name = "Unk3300PFCJODGNDCI"];*/ 3:
                    message.unk3300PFCJODGNDCI = reader.uint32();
                    break;
                case /* IslandPartySailStage stage */ 14:
                    message.stage = reader.int32();
                    break;
                case /* uint32 Unk3300_MJOIIJIBAHF = 10 [json_name = "Unk3300MJOIIJIBAHF"];*/ 10:
                    message.unk3300MJOIIJIBAHF = reader.uint32();
                    break;
                case /* GalleryStartSource start_source */ 13:
                    message.startSource = reader.int32();
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
        /* uint32 coin = 5; */
        if (message.coin !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.coin);
        /* uint32 Unk3300_HCJGDHEMBLM = 4 [json_name = "Unk3300HCJGDHEMBLM"]; */
        if (message.unk3300HCJGDHEMBLM !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.unk3300HCJGDHEMBLM);
        /* uint32 Unk3300_MJHMCAPGBIK = 6 [json_name = "Unk3300MJHMCAPGBIK"]; */
        if (message.unk3300MJHMCAPGBIK !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300MJHMCAPGBIK);
        /* uint32 Unk3300_PFCJODGNDCI = 3 [json_name = "Unk3300PFCJODGNDCI"]; */
        if (message.unk3300PFCJODGNDCI !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300PFCJODGNDCI);
        /* IslandPartySailStage stage = 14; */
        if (message.stage !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.stage);
        /* uint32 Unk3300_MJOIIJIBAHF = 10 [json_name = "Unk3300MJOIIJIBAHF"]; */
        if (message.unk3300MJOIIJIBAHF !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300MJOIIJIBAHF);
        /* GalleryStartSource start_source = 13; */
        if (message.startSource !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.startSource);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryIslandPartySailInfo
 */
exports.SceneGalleryIslandPartySailInfo = new SceneGalleryIslandPartySailInfo$Type();
