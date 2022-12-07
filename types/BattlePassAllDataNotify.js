"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassAllDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BattlePassSchedule_1 = require("./BattlePassSchedule");
const BattlePassMission_1 = require("./BattlePassMission");
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassAllDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassAllDataNotify", [
            { no: 1, name: "mission_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BattlePassMission_1.BattlePassMission },
            { no: 10, name: "cur_schedule", kind: "message", T: () => BattlePassSchedule_1.BattlePassSchedule },
            { no: 3, name: "have_cur_schedule", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { missionList: [], haveCurSchedule: false };
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
                case /* repeated BattlePassMission mission_list */ 1:
                    message.missionList.push(BattlePassMission_1.BattlePassMission.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* BattlePassSchedule cur_schedule */ 10:
                    message.curSchedule = BattlePassSchedule_1.BattlePassSchedule.internalBinaryRead(reader, reader.uint32(), options, message.curSchedule);
                    break;
                case /* bool have_cur_schedule */ 3:
                    message.haveCurSchedule = reader.bool();
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
        /* repeated BattlePassMission mission_list = 1; */
        for (let i = 0; i < message.missionList.length; i++)
            BattlePassMission_1.BattlePassMission.internalBinaryWrite(message.missionList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* BattlePassSchedule cur_schedule = 10; */
        if (message.curSchedule)
            BattlePassSchedule_1.BattlePassSchedule.internalBinaryWrite(message.curSchedule, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool have_cur_schedule = 3; */
        if (message.haveCurSchedule !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.haveCurSchedule);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassAllDataNotify
 */
exports.BattlePassAllDataNotify = new BattlePassAllDataNotify$Type();
