"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterRoguelikeDungeonNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RogueCellInfo_1 = require("./RogueCellInfo");
const RoguelikeRuneRecord_1 = require("./RoguelikeRuneRecord");
// @generated message type with reflection information, may provide speed optimized methods
class EnterRoguelikeDungeonNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EnterRoguelikeDungeonNotify", [
            { no: 11, name: "bonus_resource_prop", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "Unk3300_DBDABNIINEL", kind: "scalar", jsonName: "Unk3300DBDABNIINEL", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "rune_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RoguelikeRuneRecord_1.RoguelikeRuneRecord },
            { no: 9, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "dungeon_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1188, name: "revise_monster_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1469, name: "Unk3300_PKPOKOAAOKF", kind: "scalar", jsonName: "Unk3300PKPOKOAAOKF", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "explored_cell_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "onstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2046, name: "Unk3300_KLFDKOCGAHN", kind: "scalar", jsonName: "Unk3300KLFDKOCGAHN", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_GBHHLEDAGAM", kind: "scalar", jsonName: "Unk3300GBHHLEDAGAM", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_IIIJDDNJEBB", kind: "scalar", jsonName: "Unk3300IIIJDDNJEBB", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "backstage_avatar_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 10, name: "Unk3300_PKDLOJADIPA", kind: "scalar", jsonName: "Unk3300PKDLOJADIPA", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cell_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => RogueCellInfo_1.RogueCellInfo } }
        ]);
    }
    create(value) {
        const message = { bonusResourceProp: 0, unk3300DBDABNIINEL: 0, runeRecordList: [], curLevel: 0, dungeonId: 0, reviseMonsterLevel: 0, unk3300PKPOKOAAOKF: false, exploredCellList: [], onstageAvatarGuidList: [], stageId: 0, unk3300KLFDKOCGAHN: 0, unk3300GBHHLEDAGAM: false, unk3300IIIJDDNJEBB: 0, backstageAvatarGuidList: [], unk3300PKDLOJADIPA: 0, cellInfoMap: {} };
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
                case /* float bonus_resource_prop */ 11:
                    message.bonusResourceProp = reader.float();
                    break;
                case /* uint32 Unk3300_DBDABNIINEL = 4 [json_name = "Unk3300DBDABNIINEL"];*/ 4:
                    message.unk3300DBDABNIINEL = reader.uint32();
                    break;
                case /* repeated RoguelikeRuneRecord rune_record_list */ 12:
                    message.runeRecordList.push(RoguelikeRuneRecord_1.RoguelikeRuneRecord.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cur_level */ 9:
                    message.curLevel = reader.uint32();
                    break;
                case /* uint32 dungeon_id */ 5:
                    message.dungeonId = reader.uint32();
                    break;
                case /* uint32 revise_monster_level */ 1188:
                    message.reviseMonsterLevel = reader.uint32();
                    break;
                case /* bool Unk3300_PKPOKOAAOKF = 1469 [json_name = "Unk3300PKPOKOAAOKF"];*/ 1469:
                    message.unk3300PKPOKOAAOKF = reader.bool();
                    break;
                case /* repeated uint32 explored_cell_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exploredCellList.push(reader.uint32());
                    else
                        message.exploredCellList.push(reader.uint32());
                    break;
                case /* repeated uint64 onstage_avatar_guid_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.onstageAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* uint32 stage_id */ 6:
                    message.stageId = reader.uint32();
                    break;
                case /* uint32 Unk3300_KLFDKOCGAHN = 2046 [json_name = "Unk3300KLFDKOCGAHN"];*/ 2046:
                    message.unk3300KLFDKOCGAHN = reader.uint32();
                    break;
                case /* bool Unk3300_GBHHLEDAGAM = 3 [json_name = "Unk3300GBHHLEDAGAM"];*/ 3:
                    message.unk3300GBHHLEDAGAM = reader.bool();
                    break;
                case /* uint32 Unk3300_IIIJDDNJEBB = 1 [json_name = "Unk3300IIIJDDNJEBB"];*/ 1:
                    message.unk3300IIIJDDNJEBB = reader.uint32();
                    break;
                case /* repeated uint64 backstage_avatar_guid_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.backstageAvatarGuidList.push(reader.uint64().toBigInt());
                    else
                        message.backstageAvatarGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* uint32 Unk3300_PKDLOJADIPA = 10 [json_name = "Unk3300PKDLOJADIPA"];*/ 10:
                    message.unk3300PKDLOJADIPA = reader.uint32();
                    break;
                case /* map<uint32, RogueCellInfo> cell_info_map */ 14:
                    this.binaryReadMap14(message.cellInfoMap, reader, options);
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
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = RogueCellInfo_1.RogueCellInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field EnterRoguelikeDungeonNotify.cell_info_map");
            }
        }
        map[key ?? 0] = val ?? RogueCellInfo_1.RogueCellInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* float bonus_resource_prop = 11; */
        if (message.bonusResourceProp !== 0)
            writer.tag(11, runtime_2.WireType.Bit32).float(message.bonusResourceProp);
        /* uint32 Unk3300_DBDABNIINEL = 4 [json_name = "Unk3300DBDABNIINEL"]; */
        if (message.unk3300DBDABNIINEL !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.unk3300DBDABNIINEL);
        /* repeated RoguelikeRuneRecord rune_record_list = 12; */
        for (let i = 0; i < message.runeRecordList.length; i++)
            RoguelikeRuneRecord_1.RoguelikeRuneRecord.internalBinaryWrite(message.runeRecordList[i], writer.tag(12, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cur_level = 9; */
        if (message.curLevel !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.curLevel);
        /* uint32 dungeon_id = 5; */
        if (message.dungeonId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.dungeonId);
        /* uint32 revise_monster_level = 1188; */
        if (message.reviseMonsterLevel !== 0)
            writer.tag(1188, runtime_2.WireType.Varint).uint32(message.reviseMonsterLevel);
        /* bool Unk3300_PKPOKOAAOKF = 1469 [json_name = "Unk3300PKPOKOAAOKF"]; */
        if (message.unk3300PKPOKOAAOKF !== false)
            writer.tag(1469, runtime_2.WireType.Varint).bool(message.unk3300PKPOKOAAOKF);
        /* repeated uint32 explored_cell_list = 2; */
        if (message.exploredCellList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exploredCellList.length; i++)
                writer.uint32(message.exploredCellList[i]);
            writer.join();
        }
        /* repeated uint64 onstage_avatar_guid_list = 15; */
        if (message.onstageAvatarGuidList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.onstageAvatarGuidList.length; i++)
                writer.uint64(message.onstageAvatarGuidList[i]);
            writer.join();
        }
        /* uint32 stage_id = 6; */
        if (message.stageId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.stageId);
        /* uint32 Unk3300_KLFDKOCGAHN = 2046 [json_name = "Unk3300KLFDKOCGAHN"]; */
        if (message.unk3300KLFDKOCGAHN !== 0)
            writer.tag(2046, runtime_2.WireType.Varint).uint32(message.unk3300KLFDKOCGAHN);
        /* bool Unk3300_GBHHLEDAGAM = 3 [json_name = "Unk3300GBHHLEDAGAM"]; */
        if (message.unk3300GBHHLEDAGAM !== false)
            writer.tag(3, runtime_2.WireType.Varint).bool(message.unk3300GBHHLEDAGAM);
        /* uint32 Unk3300_IIIJDDNJEBB = 1 [json_name = "Unk3300IIIJDDNJEBB"]; */
        if (message.unk3300IIIJDDNJEBB !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.unk3300IIIJDDNJEBB);
        /* repeated uint64 backstage_avatar_guid_list = 7; */
        if (message.backstageAvatarGuidList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.backstageAvatarGuidList.length; i++)
                writer.uint64(message.backstageAvatarGuidList[i]);
            writer.join();
        }
        /* uint32 Unk3300_PKDLOJADIPA = 10 [json_name = "Unk3300PKDLOJADIPA"]; */
        if (message.unk3300PKDLOJADIPA !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.unk3300PKDLOJADIPA);
        /* map<uint32, RogueCellInfo> cell_info_map = 14; */
        for (let k of Object.keys(message.cellInfoMap)) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            RogueCellInfo_1.RogueCellInfo.internalBinaryWrite(message.cellInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EnterRoguelikeDungeonNotify
 */
exports.EnterRoguelikeDungeonNotify = new EnterRoguelikeDungeonNotify$Type();
