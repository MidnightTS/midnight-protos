"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureMapRegionInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class TreasureMapRegionInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TreasureMapRegionInfo", [
            { no: 13, name: "region_radius", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "region_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "region_center_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 6, name: "Unk3300_HHBHLPHLHIL", kind: "scalar", jsonName: "Unk3300HHBHLPHLHIL", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "start_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_LKEMEDPMIGM", kind: "scalar", jsonName: "Unk3300LKEMEDPMIGM", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_NIBJOAJLCJI", kind: "scalar", jsonName: "Unk3300NIBJOAJLCJI", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_MNEKJILFHOA", kind: "scalar", jsonName: "Unk3300MNEKJILFHOA", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { regionRadius: 0, regionId: 0, unk3300HHBHLPHLHIL: false, startTime: 0, unk3300LKEMEDPMIGM: 0, unk3300NIBJOAJLCJI: false, sceneId: 0, unk3300MNEKJILFHOA: 0 };
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
                case /* uint32 region_radius */ 13:
                    message.regionRadius = reader.uint32();
                    break;
                case /* uint32 region_id */ 10:
                    message.regionId = reader.uint32();
                    break;
                case /* Vector region_center_pos */ 5:
                    message.regionCenterPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.regionCenterPos);
                    break;
                case /* bool Unk3300_HHBHLPHLHIL = 6 [json_name = "Unk3300HHBHLPHLHIL"];*/ 6:
                    message.unk3300HHBHLPHLHIL = reader.bool();
                    break;
                case /* uint32 start_time */ 8:
                    message.startTime = reader.uint32();
                    break;
                case /* uint32 Unk3300_LKEMEDPMIGM = 3 [json_name = "Unk3300LKEMEDPMIGM"];*/ 3:
                    message.unk3300LKEMEDPMIGM = reader.uint32();
                    break;
                case /* bool Unk3300_NIBJOAJLCJI = 1 [json_name = "Unk3300NIBJOAJLCJI"];*/ 1:
                    message.unk3300NIBJOAJLCJI = reader.bool();
                    break;
                case /* uint32 scene_id */ 12:
                    message.sceneId = reader.uint32();
                    break;
                case /* uint32 Unk3300_MNEKJILFHOA = 2 [json_name = "Unk3300MNEKJILFHOA"];*/ 2:
                    message.unk3300MNEKJILFHOA = reader.uint32();
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
        /* uint32 region_radius = 13; */
        if (message.regionRadius !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.regionRadius);
        /* uint32 region_id = 10; */
        if (message.regionId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.regionId);
        /* Vector region_center_pos = 5; */
        if (message.regionCenterPos)
            Vector_1.Vector.internalBinaryWrite(message.regionCenterPos, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_HHBHLPHLHIL = 6 [json_name = "Unk3300HHBHLPHLHIL"]; */
        if (message.unk3300HHBHLPHLHIL !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300HHBHLPHLHIL);
        /* uint32 start_time = 8; */
        if (message.startTime !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.startTime);
        /* uint32 Unk3300_LKEMEDPMIGM = 3 [json_name = "Unk3300LKEMEDPMIGM"]; */
        if (message.unk3300LKEMEDPMIGM !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300LKEMEDPMIGM);
        /* bool Unk3300_NIBJOAJLCJI = 1 [json_name = "Unk3300NIBJOAJLCJI"]; */
        if (message.unk3300NIBJOAJLCJI !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.unk3300NIBJOAJLCJI);
        /* uint32 scene_id = 12; */
        if (message.sceneId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* uint32 Unk3300_MNEKJILFHOA = 2 [json_name = "Unk3300MNEKJILFHOA"]; */
        if (message.unk3300MNEKJILFHOA !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.unk3300MNEKJILFHOA);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TreasureMapRegionInfo
 */
exports.TreasureMapRegionInfo = new TreasureMapRegionInfo$Type();
