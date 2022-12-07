"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamEnterSceneInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AbilityControlBlock_1 = require("./AbilityControlBlock");
const AbilitySyncStateInfo_1 = require("./AbilitySyncStateInfo");
// @generated message type with reflection information, may provide speed optimized methods
class TeamEnterSceneInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("TeamEnterSceneInfo", [
            { no: 6, name: "team_ability_info", kind: "message", T: () => AbilitySyncStateInfo_1.AbilitySyncStateInfo },
            { no: 5, name: "ability_control_block", kind: "message", T: () => AbilityControlBlock_1.AbilityControlBlock },
            { no: 11, name: "team_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { teamEntityId: 0 };
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
                case /* AbilitySyncStateInfo team_ability_info */ 6:
                    message.teamAbilityInfo = AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryRead(reader, reader.uint32(), options, message.teamAbilityInfo);
                    break;
                case /* AbilityControlBlock ability_control_block */ 5:
                    message.abilityControlBlock = AbilityControlBlock_1.AbilityControlBlock.internalBinaryRead(reader, reader.uint32(), options, message.abilityControlBlock);
                    break;
                case /* uint32 team_entity_id */ 11:
                    message.teamEntityId = reader.uint32();
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
        /* AbilitySyncStateInfo team_ability_info = 6; */
        if (message.teamAbilityInfo)
            AbilitySyncStateInfo_1.AbilitySyncStateInfo.internalBinaryWrite(message.teamAbilityInfo, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityControlBlock ability_control_block = 5; */
        if (message.abilityControlBlock)
            AbilityControlBlock_1.AbilityControlBlock.internalBinaryWrite(message.abilityControlBlock, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 team_entity_id = 11; */
        if (message.teamEntityId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.teamEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TeamEnterSceneInfo
 */
exports.TeamEnterSceneInfo = new TeamEnterSceneInfo$Type();
