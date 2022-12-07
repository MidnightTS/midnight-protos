"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassMission = exports.BattlePassMission_MissionStatus = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum BattlePassMission.MissionStatus
 */
var BattlePassMission_MissionStatus;
(function (BattlePassMission_MissionStatus) {
    /**
     * @generated from protobuf enum value: MISSION_STATUS_INVALID = 0;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: MISSION_STATUS_UNFINISHED = 1;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["UNFINISHED"] = 1] = "UNFINISHED";
    /**
     * @generated from protobuf enum value: MISSION_STATUS_FINISHED = 2;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["FINISHED"] = 2] = "FINISHED";
    /**
     * @generated from protobuf enum value: MISSION_STATUS_POINT_TAKEN = 3;
     */
    BattlePassMission_MissionStatus[BattlePassMission_MissionStatus["POINT_TAKEN"] = 3] = "POINT_TAKEN";
})(BattlePassMission_MissionStatus = exports.BattlePassMission_MissionStatus || (exports.BattlePassMission_MissionStatus = {}));
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassMission$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassMission", [
            { no: 10, name: "cur_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "Unk3300_MBOMOLFKPPO", kind: "scalar", jsonName: "Unk3300MBOMOLFKPPO", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_DAHDCJNCALE", kind: "scalar", jsonName: "Unk3300DAHDCJNCALE", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "total_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "mission_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "mission_status", kind: "enum", T: () => ["BattlePassMission.MissionStatus", BattlePassMission_MissionStatus, "MISSION_STATUS_"] }
        ]);
    }
    create(value) {
        const message = { curProgress: 0, unk3300MBOMOLFKPPO: 0, unk3300DAHDCJNCALE: 0, totalProgress: 0, missionId: 0, missionStatus: 0 };
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
                case /* uint32 cur_progress */ 10:
                    message.curProgress = reader.uint32();
                    break;
                case /* uint32 Unk3300_MBOMOLFKPPO = 9 [json_name = "Unk3300MBOMOLFKPPO"];*/ 9:
                    message.unk3300MBOMOLFKPPO = reader.uint32();
                    break;
                case /* uint32 Unk3300_DAHDCJNCALE = 14 [json_name = "Unk3300DAHDCJNCALE"];*/ 14:
                    message.unk3300DAHDCJNCALE = reader.uint32();
                    break;
                case /* uint32 total_progress */ 12:
                    message.totalProgress = reader.uint32();
                    break;
                case /* uint32 mission_id */ 15:
                    message.missionId = reader.uint32();
                    break;
                case /* BattlePassMission.MissionStatus mission_status */ 11:
                    message.missionStatus = reader.int32();
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
        /* uint32 cur_progress = 10; */
        if (message.curProgress !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.curProgress);
        /* uint32 Unk3300_MBOMOLFKPPO = 9 [json_name = "Unk3300MBOMOLFKPPO"]; */
        if (message.unk3300MBOMOLFKPPO !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.unk3300MBOMOLFKPPO);
        /* uint32 Unk3300_DAHDCJNCALE = 14 [json_name = "Unk3300DAHDCJNCALE"]; */
        if (message.unk3300DAHDCJNCALE !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300DAHDCJNCALE);
        /* uint32 total_progress = 12; */
        if (message.totalProgress !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.totalProgress);
        /* uint32 mission_id = 15; */
        if (message.missionId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.missionId);
        /* BattlePassMission.MissionStatus mission_status = 11; */
        if (message.missionStatus !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.missionStatus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassMission
 */
exports.BattlePassMission = new BattlePassMission$Type();
