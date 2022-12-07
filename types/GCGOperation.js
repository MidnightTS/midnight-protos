"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGOperation = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGOperationSurrender_1 = require("./GCGOperationSurrender");
const GCGOperationReboot_1 = require("./GCGOperationReboot");
const GCGOperationPlayCard_1 = require("./GCGOperationPlayCard");
const GCGOperationPass_1 = require("./GCGOperationPass");
const GCGOperationAttack_1 = require("./GCGOperationAttack");
const GCGOperationReroll_1 = require("./GCGOperationReroll");
const GCGOperationOnStageSelect_1 = require("./GCGOperationOnStageSelect");
const GCGOperationRedraw_1 = require("./GCGOperationRedraw");
// @generated message type with reflection information, may provide speed optimized methods
class GCGOperation$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGOperation", [
            { no: 3, name: "op_redraw", kind: "message", oneof: "op", T: () => GCGOperationRedraw_1.GCGOperationRedraw },
            { no: 9, name: "op_select_on_stage", kind: "message", oneof: "op", T: () => GCGOperationOnStageSelect_1.GCGOperationOnStageSelect },
            { no: 4, name: "op_reroll", kind: "message", oneof: "op", T: () => GCGOperationReroll_1.GCGOperationReroll },
            { no: 7, name: "op_attack", kind: "message", oneof: "op", T: () => GCGOperationAttack_1.GCGOperationAttack },
            { no: 6, name: "op_pass", kind: "message", oneof: "op", T: () => GCGOperationPass_1.GCGOperationPass },
            { no: 15, name: "op_play_card", kind: "message", oneof: "op", T: () => GCGOperationPlayCard_1.GCGOperationPlayCard },
            { no: 5, name: "op_reboot", kind: "message", oneof: "op", T: () => GCGOperationReboot_1.GCGOperationReboot },
            { no: 10, name: "op_surrender", kind: "message", oneof: "op", T: () => GCGOperationSurrender_1.GCGOperationSurrender }
        ]);
    }
    create(value) {
        const message = { op: { oneofKind: undefined } };
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
                case /* GCGOperationRedraw op_redraw */ 3:
                    message.op = {
                        oneofKind: "opRedraw",
                        opRedraw: GCGOperationRedraw_1.GCGOperationRedraw.internalBinaryRead(reader, reader.uint32(), options, message.op.opRedraw)
                    };
                    break;
                case /* GCGOperationOnStageSelect op_select_on_stage */ 9:
                    message.op = {
                        oneofKind: "opSelectOnStage",
                        opSelectOnStage: GCGOperationOnStageSelect_1.GCGOperationOnStageSelect.internalBinaryRead(reader, reader.uint32(), options, message.op.opSelectOnStage)
                    };
                    break;
                case /* GCGOperationReroll op_reroll */ 4:
                    message.op = {
                        oneofKind: "opReroll",
                        opReroll: GCGOperationReroll_1.GCGOperationReroll.internalBinaryRead(reader, reader.uint32(), options, message.op.opReroll)
                    };
                    break;
                case /* GCGOperationAttack op_attack */ 7:
                    message.op = {
                        oneofKind: "opAttack",
                        opAttack: GCGOperationAttack_1.GCGOperationAttack.internalBinaryRead(reader, reader.uint32(), options, message.op.opAttack)
                    };
                    break;
                case /* GCGOperationPass op_pass */ 6:
                    message.op = {
                        oneofKind: "opPass",
                        opPass: GCGOperationPass_1.GCGOperationPass.internalBinaryRead(reader, reader.uint32(), options, message.op.opPass)
                    };
                    break;
                case /* GCGOperationPlayCard op_play_card */ 15:
                    message.op = {
                        oneofKind: "opPlayCard",
                        opPlayCard: GCGOperationPlayCard_1.GCGOperationPlayCard.internalBinaryRead(reader, reader.uint32(), options, message.op.opPlayCard)
                    };
                    break;
                case /* GCGOperationReboot op_reboot */ 5:
                    message.op = {
                        oneofKind: "opReboot",
                        opReboot: GCGOperationReboot_1.GCGOperationReboot.internalBinaryRead(reader, reader.uint32(), options, message.op.opReboot)
                    };
                    break;
                case /* GCGOperationSurrender op_surrender */ 10:
                    message.op = {
                        oneofKind: "opSurrender",
                        opSurrender: GCGOperationSurrender_1.GCGOperationSurrender.internalBinaryRead(reader, reader.uint32(), options, message.op.opSurrender)
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
        /* GCGOperationRedraw op_redraw = 3; */
        if (message.op.oneofKind === "opRedraw")
            GCGOperationRedraw_1.GCGOperationRedraw.internalBinaryWrite(message.op.opRedraw, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGOperationOnStageSelect op_select_on_stage = 9; */
        if (message.op.oneofKind === "opSelectOnStage")
            GCGOperationOnStageSelect_1.GCGOperationOnStageSelect.internalBinaryWrite(message.op.opSelectOnStage, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGOperationReroll op_reroll = 4; */
        if (message.op.oneofKind === "opReroll")
            GCGOperationReroll_1.GCGOperationReroll.internalBinaryWrite(message.op.opReroll, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGOperationAttack op_attack = 7; */
        if (message.op.oneofKind === "opAttack")
            GCGOperationAttack_1.GCGOperationAttack.internalBinaryWrite(message.op.opAttack, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGOperationPass op_pass = 6; */
        if (message.op.oneofKind === "opPass")
            GCGOperationPass_1.GCGOperationPass.internalBinaryWrite(message.op.opPass, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGOperationPlayCard op_play_card = 15; */
        if (message.op.oneofKind === "opPlayCard")
            GCGOperationPlayCard_1.GCGOperationPlayCard.internalBinaryWrite(message.op.opPlayCard, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGOperationReboot op_reboot = 5; */
        if (message.op.oneofKind === "opReboot")
            GCGOperationReboot_1.GCGOperationReboot.internalBinaryWrite(message.op.opReboot, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGOperationSurrender op_surrender = 10; */
        if (message.op.oneofKind === "opSurrender")
            GCGOperationSurrender_1.GCGOperationSurrender.internalBinaryWrite(message.op.opSurrender, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGOperation
 */
exports.GCGOperation = new GCGOperation$Type();
