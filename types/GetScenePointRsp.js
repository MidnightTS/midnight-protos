"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScenePointRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetScenePointRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetScenePointRsp", [
            { no: 9, name: "unlock_area_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "locked_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "unhide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "hide_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "group_unlimit_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "not_interact_dungeon_entry_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "to_be_explore_dungeon_entry_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "not_explored_dungeon_entry_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "belong_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "unlocked_point_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unlockAreaList: [], lockedPointList: [], retcode: 0, unhidePointList: [], hidePointList: [], groupUnlimitPointList: [], notInteractDungeonEntryList: [], toBeExploreDungeonEntryList: [], notExploredDungeonEntryList: [], belongUid: 0, unlockedPointList: [], sceneId: 0 };
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
                case /* repeated uint32 unlock_area_list */ 9:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockAreaList.push(reader.uint32());
                    else
                        message.unlockAreaList.push(reader.uint32());
                    break;
                case /* repeated uint32 locked_point_list */ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lockedPointList.push(reader.uint32());
                    else
                        message.lockedPointList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 unhide_point_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unhidePointList.push(reader.uint32());
                    else
                        message.unhidePointList.push(reader.uint32());
                    break;
                case /* repeated uint32 hide_point_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.hidePointList.push(reader.uint32());
                    else
                        message.hidePointList.push(reader.uint32());
                    break;
                case /* repeated uint32 group_unlimit_point_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.groupUnlimitPointList.push(reader.uint32());
                    else
                        message.groupUnlimitPointList.push(reader.uint32());
                    break;
                case /* repeated uint32 not_interact_dungeon_entry_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notInteractDungeonEntryList.push(reader.uint32());
                    else
                        message.notInteractDungeonEntryList.push(reader.uint32());
                    break;
                case /* repeated uint32 to_be_explore_dungeon_entry_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.toBeExploreDungeonEntryList.push(reader.uint32());
                    else
                        message.toBeExploreDungeonEntryList.push(reader.uint32());
                    break;
                case /* repeated uint32 not_explored_dungeon_entry_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.notExploredDungeonEntryList.push(reader.uint32());
                    else
                        message.notExploredDungeonEntryList.push(reader.uint32());
                    break;
                case /* uint32 belong_uid */ 12:
                    message.belongUid = reader.uint32();
                    break;
                case /* repeated uint32 unlocked_point_list */ 2:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockedPointList.push(reader.uint32());
                    else
                        message.unlockedPointList.push(reader.uint32());
                    break;
                case /* uint32 scene_id */ 8:
                    message.sceneId = reader.uint32();
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
        /* repeated uint32 unlock_area_list = 9; */
        if (message.unlockAreaList.length) {
            writer.tag(9, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockAreaList.length; i++)
                writer.uint32(message.unlockAreaList[i]);
            writer.join();
        }
        /* repeated uint32 locked_point_list = 15; */
        if (message.lockedPointList.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lockedPointList.length; i++)
                writer.uint32(message.lockedPointList[i]);
            writer.join();
        }
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 unhide_point_list = 3; */
        if (message.unhidePointList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unhidePointList.length; i++)
                writer.uint32(message.unhidePointList[i]);
            writer.join();
        }
        /* repeated uint32 hide_point_list = 10; */
        if (message.hidePointList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.hidePointList.length; i++)
                writer.uint32(message.hidePointList[i]);
            writer.join();
        }
        /* repeated uint32 group_unlimit_point_list = 1; */
        if (message.groupUnlimitPointList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.groupUnlimitPointList.length; i++)
                writer.uint32(message.groupUnlimitPointList[i]);
            writer.join();
        }
        /* repeated uint32 not_interact_dungeon_entry_list = 11; */
        if (message.notInteractDungeonEntryList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.notInteractDungeonEntryList.length; i++)
                writer.uint32(message.notInteractDungeonEntryList[i]);
            writer.join();
        }
        /* repeated uint32 to_be_explore_dungeon_entry_list = 6; */
        if (message.toBeExploreDungeonEntryList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.toBeExploreDungeonEntryList.length; i++)
                writer.uint32(message.toBeExploreDungeonEntryList[i]);
            writer.join();
        }
        /* repeated uint32 not_explored_dungeon_entry_list = 7; */
        if (message.notExploredDungeonEntryList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.notExploredDungeonEntryList.length; i++)
                writer.uint32(message.notExploredDungeonEntryList[i]);
            writer.join();
        }
        /* uint32 belong_uid = 12; */
        if (message.belongUid !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.belongUid);
        /* repeated uint32 unlocked_point_list = 2; */
        if (message.unlockedPointList.length) {
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockedPointList.length; i++)
                writer.uint32(message.unlockedPointList[i]);
            writer.join();
        }
        /* uint32 scene_id = 8; */
        if (message.sceneId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetScenePointRsp
 */
exports.GetScenePointRsp = new GetScenePointRsp$Type();
