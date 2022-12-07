"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginCameraSceneLookNotify = exports.BeginCameraSceneLookNotify_KeepRotType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum BeginCameraSceneLookNotify.KeepRotType
 */
var BeginCameraSceneLookNotify_KeepRotType;
(function (BeginCameraSceneLookNotify_KeepRotType) {
    /**
     * @generated from protobuf enum value: KEEP_ROT_TYPE_X = 0;
     */
    BeginCameraSceneLookNotify_KeepRotType[BeginCameraSceneLookNotify_KeepRotType["KEEP_ROT_TYPE_X"] = 0] = "KEEP_ROT_TYPE_X";
    /**
     * @generated from protobuf enum value: KEEP_ROT_TYPE_XY = 1;
     */
    BeginCameraSceneLookNotify_KeepRotType[BeginCameraSceneLookNotify_KeepRotType["KEEP_ROT_TYPE_XY"] = 1] = "KEEP_ROT_TYPE_XY";
})(BeginCameraSceneLookNotify_KeepRotType = exports.BeginCameraSceneLookNotify_KeepRotType || (exports.BeginCameraSceneLookNotify_KeepRotType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class BeginCameraSceneLookNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BeginCameraSceneLookNotify", [
            { no: 1716, name: "Unk3300_HKKCHCEMJIE", kind: "scalar", jsonName: "Unk3300HKKCHCEMJIE", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "Unk3300_DFPCMOFONNK", kind: "scalar", jsonName: "Unk3300DFPCMOFONNK", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_EELNOAICHOJ", kind: "scalar", jsonName: "Unk3300EELNOAICHOJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "Unk3300_ODADMBBFPAP", kind: "scalar", jsonName: "Unk3300ODADMBBFPAP", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "duration", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1746, name: "Unk3300_KCHKKBODNCJ", kind: "scalar", jsonName: "Unk3300KCHKKBODNCJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_FIOLGCIKFLH", kind: "scalar", jsonName: "Unk3300FIOLGCIKFLH", T: 2 /*ScalarType.FLOAT*/ },
            { no: 9, name: "other_params", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "Unk3300_NJLBIMJDFHJ", kind: "scalar", jsonName: "Unk3300NJLBIMJDFHJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 1224, name: "Unk3300_AAOGBCCNJAF", kind: "scalar", jsonName: "Unk3300AAOGBCCNJAF", T: 8 /*ScalarType.BOOL*/ },
            { no: 1403, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "keep_rot_type", kind: "enum", T: () => ["BeginCameraSceneLookNotify.KeepRotType", BeginCameraSceneLookNotify_KeepRotType] },
            { no: 8, name: "Unk3300_PPCIDICMIEN", kind: "message", jsonName: "Unk3300PPCIDICMIEN", T: () => Vector_1.Vector },
            { no: 965, name: "Unk3300_AJEENEOCFON", kind: "scalar", jsonName: "Unk3300AJEENEOCFON", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_ONBDMCHFPDL", kind: "scalar", jsonName: "Unk3300ONBDMCHFPDL", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "Unk3300_PIEFLAEGGBI", kind: "scalar", jsonName: "Unk3300PIEFLAEGGBI", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "Unk3300_FJDFGLNLMBN", kind: "message", jsonName: "Unk3300FJDFGLNLMBN", T: () => Vector_1.Vector },
            { no: 1, name: "Unk3300_ILMHDLHLKGJ", kind: "scalar", jsonName: "Unk3300ILMHDLHLKGJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "Unk3300_HCLPGGAOIAC", kind: "scalar", jsonName: "Unk3300HCLPGGAOIAC", T: 2 /*ScalarType.FLOAT*/ },
            { no: 14, name: "Unk3300_HFPCHFNFJKP", kind: "scalar", jsonName: "Unk3300HFPCHFNFJKP", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value) {
        const message = { unk3300HKKCHCEMJIE: 0, unk3300DFPCMOFONNK: false, unk3300EELNOAICHOJ: false, unk3300ODADMBBFPAP: false, duration: 0, unk3300KCHKKBODNCJ: 0, unk3300FIOLGCIKFLH: 0, otherParams: [], unk3300NJLBIMJDFHJ: false, unk3300AAOGBCCNJAF: false, entityId: 0, keepRotType: 0, unk3300AJEENEOCFON: 0, unk3300ONBDMCHFPDL: false, unk3300PIEFLAEGGBI: false, unk3300ILMHDLHLKGJ: false, unk3300HCLPGGAOIAC: 0, unk3300HFPCHFNFJKP: 0 };
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
                case /* float Unk3300_HKKCHCEMJIE = 1716 [json_name = "Unk3300HKKCHCEMJIE"];*/ 1716:
                    message.unk3300HKKCHCEMJIE = reader.float();
                    break;
                case /* bool Unk3300_DFPCMOFONNK = 15 [json_name = "Unk3300DFPCMOFONNK"];*/ 15:
                    message.unk3300DFPCMOFONNK = reader.bool();
                    break;
                case /* bool Unk3300_EELNOAICHOJ = 4 [json_name = "Unk3300EELNOAICHOJ"];*/ 4:
                    message.unk3300EELNOAICHOJ = reader.bool();
                    break;
                case /* bool Unk3300_ODADMBBFPAP = 7 [json_name = "Unk3300ODADMBBFPAP"];*/ 7:
                    message.unk3300ODADMBBFPAP = reader.bool();
                    break;
                case /* float duration */ 2:
                    message.duration = reader.float();
                    break;
                case /* uint32 Unk3300_KCHKKBODNCJ = 1746 [json_name = "Unk3300KCHKKBODNCJ"];*/ 1746:
                    message.unk3300KCHKKBODNCJ = reader.uint32();
                    break;
                case /* float Unk3300_FIOLGCIKFLH = 10 [json_name = "Unk3300FIOLGCIKFLH"];*/ 10:
                    message.unk3300FIOLGCIKFLH = reader.float();
                    break;
                case /* repeated string other_params */ 9:
                    message.otherParams.push(reader.string());
                    break;
                case /* bool Unk3300_NJLBIMJDFHJ = 3 [json_name = "Unk3300NJLBIMJDFHJ"];*/ 3:
                    message.unk3300NJLBIMJDFHJ = reader.bool();
                    break;
                case /* bool Unk3300_AAOGBCCNJAF = 1224 [json_name = "Unk3300AAOGBCCNJAF"];*/ 1224:
                    message.unk3300AAOGBCCNJAF = reader.bool();
                    break;
                case /* uint32 entity_id */ 1403:
                    message.entityId = reader.uint32();
                    break;
                case /* BeginCameraSceneLookNotify.KeepRotType keep_rot_type */ 11:
                    message.keepRotType = reader.int32();
                    break;
                case /* Vector Unk3300_PPCIDICMIEN = 8 [json_name = "Unk3300PPCIDICMIEN"];*/ 8:
                    message.unk3300PPCIDICMIEN = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300PPCIDICMIEN);
                    break;
                case /* uint32 Unk3300_AJEENEOCFON = 965 [json_name = "Unk3300AJEENEOCFON"];*/ 965:
                    message.unk3300AJEENEOCFON = reader.uint32();
                    break;
                case /* bool Unk3300_ONBDMCHFPDL = 5 [json_name = "Unk3300ONBDMCHFPDL"];*/ 5:
                    message.unk3300ONBDMCHFPDL = reader.bool();
                    break;
                case /* bool Unk3300_PIEFLAEGGBI = 6 [json_name = "Unk3300PIEFLAEGGBI"];*/ 6:
                    message.unk3300PIEFLAEGGBI = reader.bool();
                    break;
                case /* Vector Unk3300_FJDFGLNLMBN = 13 [json_name = "Unk3300FJDFGLNLMBN"];*/ 13:
                    message.unk3300FJDFGLNLMBN = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.unk3300FJDFGLNLMBN);
                    break;
                case /* bool Unk3300_ILMHDLHLKGJ = 1 [json_name = "Unk3300ILMHDLHLKGJ"];*/ 1:
                    message.unk3300ILMHDLHLKGJ = reader.bool();
                    break;
                case /* float Unk3300_HCLPGGAOIAC = 12 [json_name = "Unk3300HCLPGGAOIAC"];*/ 12:
                    message.unk3300HCLPGGAOIAC = reader.float();
                    break;
                case /* float Unk3300_HFPCHFNFJKP = 14 [json_name = "Unk3300HFPCHFNFJKP"];*/ 14:
                    message.unk3300HFPCHFNFJKP = reader.float();
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
        /* float Unk3300_HKKCHCEMJIE = 1716 [json_name = "Unk3300HKKCHCEMJIE"]; */
        if (message.unk3300HKKCHCEMJIE !== 0)
            writer.tag(1716, runtime_1.WireType.Bit32).float(message.unk3300HKKCHCEMJIE);
        /* bool Unk3300_DFPCMOFONNK = 15 [json_name = "Unk3300DFPCMOFONNK"]; */
        if (message.unk3300DFPCMOFONNK !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.unk3300DFPCMOFONNK);
        /* bool Unk3300_EELNOAICHOJ = 4 [json_name = "Unk3300EELNOAICHOJ"]; */
        if (message.unk3300EELNOAICHOJ !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.unk3300EELNOAICHOJ);
        /* bool Unk3300_ODADMBBFPAP = 7 [json_name = "Unk3300ODADMBBFPAP"]; */
        if (message.unk3300ODADMBBFPAP !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.unk3300ODADMBBFPAP);
        /* float duration = 2; */
        if (message.duration !== 0)
            writer.tag(2, runtime_1.WireType.Bit32).float(message.duration);
        /* uint32 Unk3300_KCHKKBODNCJ = 1746 [json_name = "Unk3300KCHKKBODNCJ"]; */
        if (message.unk3300KCHKKBODNCJ !== 0)
            writer.tag(1746, runtime_1.WireType.Varint).uint32(message.unk3300KCHKKBODNCJ);
        /* float Unk3300_FIOLGCIKFLH = 10 [json_name = "Unk3300FIOLGCIKFLH"]; */
        if (message.unk3300FIOLGCIKFLH !== 0)
            writer.tag(10, runtime_1.WireType.Bit32).float(message.unk3300FIOLGCIKFLH);
        /* repeated string other_params = 9; */
        for (let i = 0; i < message.otherParams.length; i++)
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.otherParams[i]);
        /* bool Unk3300_NJLBIMJDFHJ = 3 [json_name = "Unk3300NJLBIMJDFHJ"]; */
        if (message.unk3300NJLBIMJDFHJ !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.unk3300NJLBIMJDFHJ);
        /* bool Unk3300_AAOGBCCNJAF = 1224 [json_name = "Unk3300AAOGBCCNJAF"]; */
        if (message.unk3300AAOGBCCNJAF !== false)
            writer.tag(1224, runtime_1.WireType.Varint).bool(message.unk3300AAOGBCCNJAF);
        /* uint32 entity_id = 1403; */
        if (message.entityId !== 0)
            writer.tag(1403, runtime_1.WireType.Varint).uint32(message.entityId);
        /* BeginCameraSceneLookNotify.KeepRotType keep_rot_type = 11; */
        if (message.keepRotType !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.keepRotType);
        /* Vector Unk3300_PPCIDICMIEN = 8 [json_name = "Unk3300PPCIDICMIEN"]; */
        if (message.unk3300PPCIDICMIEN)
            Vector_1.Vector.internalBinaryWrite(message.unk3300PPCIDICMIEN, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_AJEENEOCFON = 965 [json_name = "Unk3300AJEENEOCFON"]; */
        if (message.unk3300AJEENEOCFON !== 0)
            writer.tag(965, runtime_1.WireType.Varint).uint32(message.unk3300AJEENEOCFON);
        /* bool Unk3300_ONBDMCHFPDL = 5 [json_name = "Unk3300ONBDMCHFPDL"]; */
        if (message.unk3300ONBDMCHFPDL !== false)
            writer.tag(5, runtime_1.WireType.Varint).bool(message.unk3300ONBDMCHFPDL);
        /* bool Unk3300_PIEFLAEGGBI = 6 [json_name = "Unk3300PIEFLAEGGBI"]; */
        if (message.unk3300PIEFLAEGGBI !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300PIEFLAEGGBI);
        /* Vector Unk3300_FJDFGLNLMBN = 13 [json_name = "Unk3300FJDFGLNLMBN"]; */
        if (message.unk3300FJDFGLNLMBN)
            Vector_1.Vector.internalBinaryWrite(message.unk3300FJDFGLNLMBN, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_ILMHDLHLKGJ = 1 [json_name = "Unk3300ILMHDLHLKGJ"]; */
        if (message.unk3300ILMHDLHLKGJ !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.unk3300ILMHDLHLKGJ);
        /* float Unk3300_HCLPGGAOIAC = 12 [json_name = "Unk3300HCLPGGAOIAC"]; */
        if (message.unk3300HCLPGGAOIAC !== 0)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.unk3300HCLPGGAOIAC);
        /* float Unk3300_HFPCHFNFJKP = 14 [json_name = "Unk3300HFPCHFNFJKP"]; */
        if (message.unk3300HFPCHFNFJKP !== 0)
            writer.tag(14, runtime_1.WireType.Bit32).float(message.unk3300HFPCHFNFJKP);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BeginCameraSceneLookNotify
 */
exports.BeginCameraSceneLookNotify = new BeginCameraSceneLookNotify$Type();
