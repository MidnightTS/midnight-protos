"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerTeamSelectReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const TowerTeam_1 = require("./TowerTeam");
// @generated message type with reflection information, may provide speed optimized methods
class TowerTeamSelectReq$Type extends runtime_5.MessageType {
    constructor() {
        super("TowerTeamSelectReq", [
            { no: 5, name: "tower_team_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TowerTeam_1.TowerTeam },
            { no: 10, name: "floor_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { towerTeamList: [], floorId: 0 };
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
                case /* repeated TowerTeam tower_team_list */ 5:
                    message.towerTeamList.push(TowerTeam_1.TowerTeam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 floor_id */ 10:
                    message.floorId = reader.uint32();
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
        /* repeated TowerTeam tower_team_list = 5; */
        for (let i = 0; i < message.towerTeamList.length; i++)
            TowerTeam_1.TowerTeam.internalBinaryWrite(message.towerTeamList[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 floor_id = 10; */
        if (message.floorId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.floorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TowerTeamSelectReq
 */
exports.TowerTeamSelectReq = new TowerTeamSelectReq$Type();
