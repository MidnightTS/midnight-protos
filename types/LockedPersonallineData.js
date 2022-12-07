"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockedPersonallineData = exports.LockedPersonallineData_LockReason = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum LockedPersonallineData.LockReason
 */
var LockedPersonallineData_LockReason;
(function (LockedPersonallineData_LockReason) {
    /**
     * @generated from protobuf enum value: LOCK_REASON_LEVEL = 0;
     */
    LockedPersonallineData_LockReason[LockedPersonallineData_LockReason["LEVEL"] = 0] = "LEVEL";
    /**
     * @generated from protobuf enum value: LOCK_REASON_QUEST = 1;
     */
    LockedPersonallineData_LockReason[LockedPersonallineData_LockReason["QUEST"] = 1] = "QUEST";
})(LockedPersonallineData_LockReason = exports.LockedPersonallineData_LockReason || (exports.LockedPersonallineData_LockReason = {}));
// @generated message type with reflection information, may provide speed optimized methods
class LockedPersonallineData$Type extends runtime_5.MessageType {
    constructor() {
        super("LockedPersonallineData", [
            { no: 13, name: "lock_reason", kind: "enum", T: () => ["LockedPersonallineData.LockReason", LockedPersonallineData_LockReason, "LOCK_REASON_"] },
            { no: 3, name: "personal_line_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "chapter_id", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "level", kind: "scalar", oneof: "param", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { lockReason: 0, personalLineId: 0, param: { oneofKind: undefined } };
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
                case /* LockedPersonallineData.LockReason lock_reason */ 13:
                    message.lockReason = reader.int32();
                    break;
                case /* uint32 personal_line_id */ 3:
                    message.personalLineId = reader.uint32();
                    break;
                case /* uint32 chapter_id */ 4:
                    message.param = {
                        oneofKind: "chapterId",
                        chapterId: reader.uint32()
                    };
                    break;
                case /* uint32 level */ 15:
                    message.param = {
                        oneofKind: "level",
                        level: reader.uint32()
                    };
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
        /* LockedPersonallineData.LockReason lock_reason = 13; */
        if (message.lockReason !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.lockReason);
        /* uint32 personal_line_id = 3; */
        if (message.personalLineId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.personalLineId);
        /* uint32 chapter_id = 4; */
        if (message.param.oneofKind === "chapterId")
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.param.chapterId);
        /* uint32 level = 15; */
        if (message.param.oneofKind === "level")
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.param.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LockedPersonallineData
 */
exports.LockedPersonallineData = new LockedPersonallineData$Type();
