"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BounceConjuringGallerySettleInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ExhibitionDisplayInfo_1 = require("./ExhibitionDisplayInfo");
const OnlinePlayerInfo_1 = require("./OnlinePlayerInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BounceConjuringGallerySettleInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("BounceConjuringGallerySettleInfo", [
            { no: 6, name: "Unk3300_PELHBJDMKAE", kind: "scalar", jsonName: "Unk3300PELHBJDMKAE", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "gadget_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "Unk3300_CNGOBOFDEOE", kind: "scalar", jsonName: "Unk3300CNGOBOFDEOE", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_NKGFKLGDFAC", kind: "scalar", jsonName: "Unk3300NKGFKLGDFAC", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "player_info", kind: "message", T: () => OnlinePlayerInfo_1.OnlinePlayerInfo },
            { no: 12, name: "damage", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 7, name: "Unk3300_BJHCDKNFDFN", kind: "scalar", jsonName: "Unk3300BJHCDKNFDFN", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "card_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo_1.ExhibitionDisplayInfo }
        ]);
    }
    create(value) {
        const message = { unk3300PELHBJDMKAE: 0, score: 0, gadgetCountMap: {}, unk3300CNGOBOFDEOE: 0, unk3300NKGFKLGDFAC: 0, damage: 0, unk3300BJHCDKNFDFN: 0, cardList: [] };
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
                case /* uint32 Unk3300_PELHBJDMKAE = 6 [json_name = "Unk3300PELHBJDMKAE"];*/ 6:
                    message.unk3300PELHBJDMKAE = reader.uint32();
                    break;
                case /* uint32 score */ 15:
                    message.score = reader.uint32();
                    break;
                case /* map<uint32, uint32> gadget_count_map */ 3:
                    this.binaryReadMap3(message.gadgetCountMap, reader, options);
                    break;
                case /* uint32 Unk3300_CNGOBOFDEOE = 11 [json_name = "Unk3300CNGOBOFDEOE"];*/ 11:
                    message.unk3300CNGOBOFDEOE = reader.uint32();
                    break;
                case /* uint32 Unk3300_NKGFKLGDFAC = 1 [json_name = "Unk3300NKGFKLGDFAC"];*/ 1:
                    message.unk3300NKGFKLGDFAC = reader.uint32();
                    break;
                case /* OnlinePlayerInfo player_info */ 2:
                    message.playerInfo = OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryRead(reader, reader.uint32(), options, message.playerInfo);
                    break;
                case /* float damage */ 12:
                    message.damage = reader.float();
                    break;
                case /* uint32 Unk3300_BJHCDKNFDFN = 7 [json_name = "Unk3300BJHCDKNFDFN"];*/ 7:
                    message.unk3300BJHCDKNFDFN = reader.uint32();
                    break;
                case /* repeated ExhibitionDisplayInfo card_list */ 9:
                    message.cardList.push(ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
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
    binaryReadMap3(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field BounceConjuringGallerySettleInfo.gadget_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_PELHBJDMKAE = 6 [json_name = "Unk3300PELHBJDMKAE"]; */
        if (message.unk3300PELHBJDMKAE !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300PELHBJDMKAE);
        /* uint32 score = 15; */
        if (message.score !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.score);
        /* map<uint32, uint32> gadget_count_map = 3; */
        for (let k of Object.keys(message.gadgetCountMap))
            writer.tag(3, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.gadgetCountMap[k]).join();
        /* uint32 Unk3300_CNGOBOFDEOE = 11 [json_name = "Unk3300CNGOBOFDEOE"]; */
        if (message.unk3300CNGOBOFDEOE !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300CNGOBOFDEOE);
        /* uint32 Unk3300_NKGFKLGDFAC = 1 [json_name = "Unk3300NKGFKLGDFAC"]; */
        if (message.unk3300NKGFKLGDFAC !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300NKGFKLGDFAC);
        /* OnlinePlayerInfo player_info = 2; */
        if (message.playerInfo)
            OnlinePlayerInfo_1.OnlinePlayerInfo.internalBinaryWrite(message.playerInfo, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* float damage = 12; */
        if (message.damage !== 0)
            writer.tag(12, runtime_1.WireType.Bit32).float(message.damage);
        /* uint32 Unk3300_BJHCDKNFDFN = 7 [json_name = "Unk3300BJHCDKNFDFN"]; */
        if (message.unk3300BJHCDKNFDFN !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300BJHCDKNFDFN);
        /* repeated ExhibitionDisplayInfo card_list = 9; */
        for (let i = 0; i < message.cardList.length; i++)
            ExhibitionDisplayInfo_1.ExhibitionDisplayInfo.internalBinaryWrite(message.cardList[i], writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BounceConjuringGallerySettleInfo
 */
exports.BounceConjuringGallerySettleInfo = new BounceConjuringGallerySettleInfo$Type();
