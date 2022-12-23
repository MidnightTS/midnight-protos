"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerCurLevelRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TowerTeam_1 = require("./TowerTeam");
// @generated message type with reflection information, may provide speed optimized methods
class TowerCurLevelRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerCurLevelRecord", [
            { no: 14, name: "buff_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_upper_part", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "cur_level_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_empty", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "tower_team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerTeam_1.TowerTeam },
            { no: 9, name: "cur_floor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { buffIdList: [], isUpperPart: false, curLevelIndex: 0, isEmpty: false, towerTeamList: [], curFloorId: 0 };
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
                case /* repeated uint32 buff_id_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.buffIdList.push(reader.uint32());
                    else
                        message.buffIdList.push(reader.uint32());
                    break;
                case /* bool is_upper_part */ 4:
                    message.isUpperPart = reader.bool();
                    break;
                case /* uint32 cur_level_index */ 6:
                    message.curLevelIndex = reader.uint32();
                    break;
                case /* bool is_empty */ 1:
                    message.isEmpty = reader.bool();
                    break;
                case /* repeated TowerTeam tower_team_list */ 8:
                    message.towerTeamList.push(TowerTeam_1.TowerTeam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 cur_floor_id */ 9:
                    message.curFloorId = reader.uint32();
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
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 buff_id_list = 14; */
        if (message.buffIdList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.buffIdList.length; i++)
                writer.uint32(message.buffIdList[i]);
            writer.join();
        }
        /* bool is_upper_part = 4; */
        if (message.isUpperPart !== false)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isUpperPart);
        /* uint32 cur_level_index = 6; */
        if (message.curLevelIndex !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.curLevelIndex);
        /* bool is_empty = 1; */
        if (message.isEmpty !== false)
            writer.tag(1, runtime_2.WireType.Varint).bool(message.isEmpty);
        /* repeated TowerTeam tower_team_list = 8; */
        for (let i = 0; i < message.towerTeamList.length; i++)
            TowerTeam_1.TowerTeam.internalBinaryWrite(message.towerTeamList[i], writer.tag(8, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 cur_floor_id = 9; */
        if (message.curFloorId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.curFloorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerCurLevelRecord
 */
exports.TowerCurLevelRecord = new TowerCurLevelRecord$Type();
