"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGPlayerField = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGDiceSideType_1 = require("./GCGDiceSideType");
const GCGPVEIntention_1 = require("./GCGPVEIntention");
const GCGWaitingCharacter_1 = require("./GCGWaitingCharacter");
const GCGZone_1 = require("./GCGZone");
// @generated message type with reflection information, may provide speed optimized methods
class GCGPlayerField$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGPlayerField", [
            { no: 5, name: "Unk3300_IKJMGAHCFPM", kind: "scalar", jsonName: "Unk3300IKJMGAHCFPM", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "modify_zone_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => GCGZone_1.GCGZone } },
            { no: 731, name: "Unk3300_GGHKFFADEAL", kind: "scalar", jsonName: "Unk3300GGHKFFADEAL", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_AOPJIOHMPOF", kind: "message", jsonName: "Unk3300AOPJIOHMPOF", T: () => GCGZone_1.GCGZone },
            { no: 12, name: "Unk3300_FDFPHNDOJML", kind: "scalar", jsonName: "Unk3300FDFPHNDOJML", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_IPLMHKCNDLE", kind: "message", jsonName: "Unk3300IPLMHKCNDLE", T: () => GCGZone_1.GCGZone },
            { no: 9, name: "Unk3300_EIHOMDLENMK", kind: "message", jsonName: "Unk3300EIHOMDLENMK", T: () => GCGZone_1.GCGZone },
            { no: 2, name: "waiting_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGWaitingCharacter_1.GCGWaitingCharacter },
            { no: 15, name: "Unk3300_PBECINKKHND", kind: "scalar", jsonName: "Unk3300PBECINKKHND", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_INDJNJJJNKL", kind: "message", jsonName: "Unk3300INDJNJJJNKL", T: () => GCGZone_1.GCGZone },
            { no: 4, name: "Unk3300_EFNAEFBECHD", kind: "message", jsonName: "Unk3300EFNAEFBECHD", T: () => GCGZone_1.GCGZone },
            { no: 8, name: "is_passed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 304, name: "intention_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GCGPVEIntention_1.GCGPVEIntention },
            { no: 13, name: "dice_side_list", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["GCGDiceSideType", GCGDiceSideType_1.GCGDiceSideType] },
            { no: 3, name: "deck_card_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_GLNIFLOKBPM", kind: "scalar", jsonName: "Unk3300GLNIFLOKBPM", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IKJMGAHCFPM: 0, modifyZoneMap: {}, unk3300GGHKFFADEAL: 0, unk3300FDFPHNDOJML: 0, waitingList: [], unk3300PBECINKKHND: 0, controllerId: 0, isPassed: false, intentionList: [], diceSideList: [], deckCardNum: 0, unk3300GLNIFLOKBPM: 0 };
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
                case /* uint32 Unk3300_IKJMGAHCFPM = 5 [json_name = "Unk3300IKJMGAHCFPM"];*/ 5:
                    message.unk3300IKJMGAHCFPM = reader.uint32();
                    break;
                case /* map<uint32, GCGZone> modify_zone_map */ 7:
                    this.binaryReadMap7(message.modifyZoneMap, reader, options);
                    break;
                case /* uint32 Unk3300_GGHKFFADEAL = 731 [json_name = "Unk3300GGHKFFADEAL"];*/ 731:
                    message.unk3300GGHKFFADEAL = reader.uint32();
                    break;
                case /* GCGZone Unk3300_AOPJIOHMPOF = 10 [json_name = "Unk3300AOPJIOHMPOF"];*/ 10:
                    message.unk3300AOPJIOHMPOF = GCGZone_1.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.unk3300AOPJIOHMPOF);
                    break;
                case /* uint32 Unk3300_FDFPHNDOJML = 12 [json_name = "Unk3300FDFPHNDOJML"];*/ 12:
                    message.unk3300FDFPHNDOJML = reader.uint32();
                    break;
                case /* GCGZone Unk3300_IPLMHKCNDLE = 1 [json_name = "Unk3300IPLMHKCNDLE"];*/ 1:
                    message.unk3300IPLMHKCNDLE = GCGZone_1.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.unk3300IPLMHKCNDLE);
                    break;
                case /* GCGZone Unk3300_EIHOMDLENMK = 9 [json_name = "Unk3300EIHOMDLENMK"];*/ 9:
                    message.unk3300EIHOMDLENMK = GCGZone_1.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.unk3300EIHOMDLENMK);
                    break;
                case /* repeated GCGWaitingCharacter waiting_list */ 2:
                    message.waitingList.push(GCGWaitingCharacter_1.GCGWaitingCharacter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_PBECINKKHND = 15 [json_name = "Unk3300PBECINKKHND"];*/ 15:
                    message.unk3300PBECINKKHND = reader.uint32();
                    break;
                case /* uint32 controller_id */ 6:
                    message.controllerId = reader.uint32();
                    break;
                case /* GCGZone Unk3300_INDJNJJJNKL = 11 [json_name = "Unk3300INDJNJJJNKL"];*/ 11:
                    message.unk3300INDJNJJJNKL = GCGZone_1.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.unk3300INDJNJJJNKL);
                    break;
                case /* GCGZone Unk3300_EFNAEFBECHD = 4 [json_name = "Unk3300EFNAEFBECHD"];*/ 4:
                    message.unk3300EFNAEFBECHD = GCGZone_1.GCGZone.internalBinaryRead(reader, reader.uint32(), options, message.unk3300EFNAEFBECHD);
                    break;
                case /* bool is_passed */ 8:
                    message.isPassed = reader.bool();
                    break;
                case /* repeated GCGPVEIntention intention_list */ 304:
                    message.intentionList.push(GCGPVEIntention_1.GCGPVEIntention.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated GCGDiceSideType dice_side_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.diceSideList.push(reader.int32());
                    else
                        message.diceSideList.push(reader.int32());
                    break;
                case /* uint32 deck_card_num */ 3:
                    message.deckCardNum = reader.uint32();
                    break;
                case /* uint32 Unk3300_GLNIFLOKBPM = 14 [json_name = "Unk3300GLNIFLOKBPM"];*/ 14:
                    message.unk3300GLNIFLOKBPM = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap7(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = GCGZone_1.GCGZone.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGPlayerField.modify_zone_map");
            }
        }
        map[key ?? 0] = val ?? GCGZone_1.GCGZone.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_IKJMGAHCFPM = 5 [json_name = "Unk3300IKJMGAHCFPM"]; */
        if (message.unk3300IKJMGAHCFPM !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.unk3300IKJMGAHCFPM);
        /* map<uint32, GCGZone> modify_zone_map = 7; */
        for (let k of Object.keys(message.modifyZoneMap)) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            GCGZone_1.GCGZone.internalBinaryWrite(message.modifyZoneMap[k], writer, options);
            writer.join().join();
        }
        /* uint32 Unk3300_GGHKFFADEAL = 731 [json_name = "Unk3300GGHKFFADEAL"]; */
        if (message.unk3300GGHKFFADEAL !== 0)
            writer.tag(731, runtime_2.WireType.Varint).uint32(message.unk3300GGHKFFADEAL);
        /* GCGZone Unk3300_AOPJIOHMPOF = 10 [json_name = "Unk3300AOPJIOHMPOF"]; */
        if (message.unk3300AOPJIOHMPOF)
            GCGZone_1.GCGZone.internalBinaryWrite(message.unk3300AOPJIOHMPOF, writer.tag(10, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_FDFPHNDOJML = 12 [json_name = "Unk3300FDFPHNDOJML"]; */
        if (message.unk3300FDFPHNDOJML !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.unk3300FDFPHNDOJML);
        /* GCGZone Unk3300_IPLMHKCNDLE = 1 [json_name = "Unk3300IPLMHKCNDLE"]; */
        if (message.unk3300IPLMHKCNDLE)
            GCGZone_1.GCGZone.internalBinaryWrite(message.unk3300IPLMHKCNDLE, writer.tag(1, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* GCGZone Unk3300_EIHOMDLENMK = 9 [json_name = "Unk3300EIHOMDLENMK"]; */
        if (message.unk3300EIHOMDLENMK)
            GCGZone_1.GCGZone.internalBinaryWrite(message.unk3300EIHOMDLENMK, writer.tag(9, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGWaitingCharacter waiting_list = 2; */
        for (let i = 0; i < message.waitingList.length; i++)
            GCGWaitingCharacter_1.GCGWaitingCharacter.internalBinaryWrite(message.waitingList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_PBECINKKHND = 15 [json_name = "Unk3300PBECINKKHND"]; */
        if (message.unk3300PBECINKKHND !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.unk3300PBECINKKHND);
        /* uint32 controller_id = 6; */
        if (message.controllerId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.controllerId);
        /* GCGZone Unk3300_INDJNJJJNKL = 11 [json_name = "Unk3300INDJNJJJNKL"]; */
        if (message.unk3300INDJNJJJNKL)
            GCGZone_1.GCGZone.internalBinaryWrite(message.unk3300INDJNJJJNKL, writer.tag(11, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* GCGZone Unk3300_EFNAEFBECHD = 4 [json_name = "Unk3300EFNAEFBECHD"]; */
        if (message.unk3300EFNAEFBECHD)
            GCGZone_1.GCGZone.internalBinaryWrite(message.unk3300EFNAEFBECHD, writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* bool is_passed = 8; */
        if (message.isPassed !== false)
            writer.tag(8, runtime_2.WireType.Varint).bool(message.isPassed);
        /* repeated GCGPVEIntention intention_list = 304; */
        for (let i = 0; i < message.intentionList.length; i++)
            GCGPVEIntention_1.GCGPVEIntention.internalBinaryWrite(message.intentionList[i], writer.tag(304, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated GCGDiceSideType dice_side_list = 13; */
        if (message.diceSideList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.diceSideList.length; i++)
                writer.int32(message.diceSideList[i]);
            writer.join();
        }
        /* uint32 deck_card_num = 3; */
        if (message.deckCardNum !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.deckCardNum);
        /* uint32 Unk3300_GLNIFLOKBPM = 14 [json_name = "Unk3300GLNIFLOKBPM"]; */
        if (message.unk3300GLNIFLOKBPM !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.unk3300GLNIFLOKBPM);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPlayerField
 */
exports.GCGPlayerField = new GCGPlayerField$Type();
