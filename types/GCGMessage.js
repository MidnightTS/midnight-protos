"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMessage = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGMsgReactionEnd_1 = require("./GCGMsgReactionEnd");
const GCGMsgReactionBegin_1 = require("./GCGMsgReactionBegin");
const GCGMsgNoDamageSkillResult_1 = require("./GCGMsgNoDamageSkillResult");
const GCGMsgSkillLimitsChange_1 = require("./GCGMsgSkillLimitsChange");
const GCGMsgPVEIntentionChange_1 = require("./GCGMsgPVEIntentionChange");
const GCGMsgPVEIntentionInfo_1 = require("./GCGMsgPVEIntentionInfo");
const GCGMsgPhaseContinue_1 = require("./GCGMsgPhaseContinue");
const GCGMsgCostRevise_1 = require("./GCGMsgCostRevise");
const GCGMsgSelectOnStageByEffect_1 = require("./GCGMsgSelectOnStageByEffect");
const GCGMsgCardUpdate_1 = require("./GCGMsgCardUpdate");
const GCGMsgWaitingListChange_1 = require("./GCGMsgWaitingListChange");
const GCGMsgOpTimer_1 = require("./GCGMsgOpTimer");
const GCGMsgGameOver_1 = require("./GCGMsgGameOver");
const GCGMsgClientPerform_1 = require("./GCGMsgClientPerform");
const GCGMsgDuelDataChange_1 = require("./GCGMsgDuelDataChange");
const GCGMsgUseSkillEnd_1 = require("./GCGMsgUseSkillEnd");
const GCGMsgModifyRemove_1 = require("./GCGMsgModifyRemove");
const GCGMsgModifyAdd_1 = require("./GCGMsgModifyAdd");
const GCGMsgUpdateController_1 = require("./GCGMsgUpdateController");
const GCGMsgNewCard_1 = require("./GCGMsgNewCard");
const GCGMsgUseSkill_1 = require("./GCGMsgUseSkill");
const GCGMsgMoveCard_1 = require("./GCGMsgMoveCard");
const GCGMsgAddDice_1 = require("./GCGMsgAddDice");
const GCGMsgCostDice_1 = require("./GCGMsgCostDice");
const GCGMsgSkillResult_1 = require("./GCGMsgSkillResult");
const GCGMsgCharDie_1 = require("./GCGMsgCharDie");
const GCGMsgPass_1 = require("./GCGMsgPass");
const GCGMsgDiceReroll_1 = require("./GCGMsgDiceReroll");
const GCGMsgDiceRoll_1 = require("./GCGMsgDiceRoll");
const GCGMsgSelectOnStage_1 = require("./GCGMsgSelectOnStage");
const GCGMsgRemoveCards_1 = require("./GCGMsgRemoveCards");
const GCGMsgAddCards_1 = require("./GCGMsgAddCards");
const GCGMsgPhaseChange_1 = require("./GCGMsgPhaseChange");
const GCGMsgTokenChange_1 = require("./GCGMsgTokenChange");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMessage$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMessage", [
            { no: 2, name: "token_change", kind: "message", oneof: "message", T: () => GCGMsgTokenChange_1.GCGMsgTokenChange },
            { no: 10, name: "phase_change", kind: "message", oneof: "message", T: () => GCGMsgPhaseChange_1.GCGMsgPhaseChange },
            { no: 5, name: "add_cards", kind: "message", oneof: "message", T: () => GCGMsgAddCards_1.GCGMsgAddCards },
            { no: 12, name: "remove_cards", kind: "message", oneof: "message", T: () => GCGMsgRemoveCards_1.GCGMsgRemoveCards },
            { no: 6, name: "select_on_stage", kind: "message", oneof: "message", T: () => GCGMsgSelectOnStage_1.GCGMsgSelectOnStage },
            { no: 14, name: "dice_roll", kind: "message", oneof: "message", T: () => GCGMsgDiceRoll_1.GCGMsgDiceRoll },
            { no: 15, name: "dice_reroll", kind: "message", oneof: "message", T: () => GCGMsgDiceReroll_1.GCGMsgDiceReroll },
            { no: 8, name: "pass", kind: "message", oneof: "message", T: () => GCGMsgPass_1.GCGMsgPass },
            { no: 4, name: "char_die", kind: "message", oneof: "message", T: () => GCGMsgCharDie_1.GCGMsgCharDie },
            { no: 3, name: "skill_result", kind: "message", oneof: "message", T: () => GCGMsgSkillResult_1.GCGMsgSkillResult },
            { no: 13, name: "cost_dice", kind: "message", oneof: "message", T: () => GCGMsgCostDice_1.GCGMsgCostDice },
            { no: 7, name: "add_dice", kind: "message", oneof: "message", T: () => GCGMsgAddDice_1.GCGMsgAddDice },
            { no: 11, name: "move_card", kind: "message", oneof: "message", T: () => GCGMsgMoveCard_1.GCGMsgMoveCard },
            { no: 1, name: "use_skill", kind: "message", oneof: "message", T: () => GCGMsgUseSkill_1.GCGMsgUseSkill },
            { no: 296, name: "new_card", kind: "message", oneof: "message", T: () => GCGMsgNewCard_1.GCGMsgNewCard },
            { no: 1111, name: "update_controller", kind: "message", oneof: "message", T: () => GCGMsgUpdateController_1.GCGMsgUpdateController },
            { no: 1733, name: "modify_add", kind: "message", oneof: "message", T: () => GCGMsgModifyAdd_1.GCGMsgModifyAdd },
            { no: 2014, name: "modify_remove", kind: "message", oneof: "message", T: () => GCGMsgModifyRemove_1.GCGMsgModifyRemove },
            { no: 1368, name: "use_skill_end", kind: "message", oneof: "message", T: () => GCGMsgUseSkillEnd_1.GCGMsgUseSkillEnd },
            { no: 1791, name: "duel_data_change", kind: "message", oneof: "message", T: () => GCGMsgDuelDataChange_1.GCGMsgDuelDataChange },
            { no: 1677, name: "client_perform", kind: "message", oneof: "message", T: () => GCGMsgClientPerform_1.GCGMsgClientPerform },
            { no: 632, name: "game_over", kind: "message", oneof: "message", T: () => GCGMsgGameOver_1.GCGMsgGameOver },
            { no: 154, name: "op_timer", kind: "message", oneof: "message", T: () => GCGMsgOpTimer_1.GCGMsgOpTimer },
            { no: 1991, name: "waiting_list_change", kind: "message", oneof: "message", T: () => GCGMsgWaitingListChange_1.GCGMsgWaitingListChange },
            { no: 1702, name: "card_update", kind: "message", oneof: "message", T: () => GCGMsgCardUpdate_1.GCGMsgCardUpdate },
            { no: 1737, name: "select_on_stage_by_effect", kind: "message", oneof: "message", T: () => GCGMsgSelectOnStageByEffect_1.GCGMsgSelectOnStageByEffect },
            { no: 468, name: "cost_revise", kind: "message", oneof: "message", T: () => GCGMsgCostRevise_1.GCGMsgCostRevise },
            { no: 1157, name: "phase_continue", kind: "message", oneof: "message", T: () => GCGMsgPhaseContinue_1.GCGMsgPhaseContinue },
            { no: 850, name: "pve_intention_info", kind: "message", oneof: "message", T: () => GCGMsgPVEIntentionInfo_1.GCGMsgPVEIntentionInfo },
            { no: 1268, name: "pve_intention_change", kind: "message", oneof: "message", T: () => GCGMsgPVEIntentionChange_1.GCGMsgPVEIntentionChange },
            { no: 710, name: "skill_limits_change", kind: "message", oneof: "message", T: () => GCGMsgSkillLimitsChange_1.GCGMsgSkillLimitsChange },
            { no: 773, name: "no_damage_skill_result", kind: "message", oneof: "message", T: () => GCGMsgNoDamageSkillResult_1.GCGMsgNoDamageSkillResult },
            { no: 243, name: "reaction_begin", kind: "message", oneof: "message", T: () => GCGMsgReactionBegin_1.GCGMsgReactionBegin },
            { no: 1172, name: "reaction_end", kind: "message", oneof: "message", T: () => GCGMsgReactionEnd_1.GCGMsgReactionEnd }
        ]);
    }
    create(value) {
        const message = { message: { oneofKind: undefined } };
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
                case /* GCGMsgTokenChange token_change */ 2:
                    message.message = {
                        oneofKind: "tokenChange",
                        tokenChange: GCGMsgTokenChange_1.GCGMsgTokenChange.internalBinaryRead(reader, reader.uint32(), options, message.message.tokenChange)
                    };
                    break;
                case /* GCGMsgPhaseChange phase_change */ 10:
                    message.message = {
                        oneofKind: "phaseChange",
                        phaseChange: GCGMsgPhaseChange_1.GCGMsgPhaseChange.internalBinaryRead(reader, reader.uint32(), options, message.message.phaseChange)
                    };
                    break;
                case /* GCGMsgAddCards add_cards */ 5:
                    message.message = {
                        oneofKind: "addCards",
                        addCards: GCGMsgAddCards_1.GCGMsgAddCards.internalBinaryRead(reader, reader.uint32(), options, message.message.addCards)
                    };
                    break;
                case /* GCGMsgRemoveCards remove_cards */ 12:
                    message.message = {
                        oneofKind: "removeCards",
                        removeCards: GCGMsgRemoveCards_1.GCGMsgRemoveCards.internalBinaryRead(reader, reader.uint32(), options, message.message.removeCards)
                    };
                    break;
                case /* GCGMsgSelectOnStage select_on_stage */ 6:
                    message.message = {
                        oneofKind: "selectOnStage",
                        selectOnStage: GCGMsgSelectOnStage_1.GCGMsgSelectOnStage.internalBinaryRead(reader, reader.uint32(), options, message.message.selectOnStage)
                    };
                    break;
                case /* GCGMsgDiceRoll dice_roll */ 14:
                    message.message = {
                        oneofKind: "diceRoll",
                        diceRoll: GCGMsgDiceRoll_1.GCGMsgDiceRoll.internalBinaryRead(reader, reader.uint32(), options, message.message.diceRoll)
                    };
                    break;
                case /* GCGMsgDiceReroll dice_reroll */ 15:
                    message.message = {
                        oneofKind: "diceReroll",
                        diceReroll: GCGMsgDiceReroll_1.GCGMsgDiceReroll.internalBinaryRead(reader, reader.uint32(), options, message.message.diceReroll)
                    };
                    break;
                case /* GCGMsgPass pass */ 8:
                    message.message = {
                        oneofKind: "pass",
                        pass: GCGMsgPass_1.GCGMsgPass.internalBinaryRead(reader, reader.uint32(), options, message.message.pass)
                    };
                    break;
                case /* GCGMsgCharDie char_die */ 4:
                    message.message = {
                        oneofKind: "charDie",
                        charDie: GCGMsgCharDie_1.GCGMsgCharDie.internalBinaryRead(reader, reader.uint32(), options, message.message.charDie)
                    };
                    break;
                case /* GCGMsgSkillResult skill_result */ 3:
                    message.message = {
                        oneofKind: "skillResult",
                        skillResult: GCGMsgSkillResult_1.GCGMsgSkillResult.internalBinaryRead(reader, reader.uint32(), options, message.message.skillResult)
                    };
                    break;
                case /* GCGMsgCostDice cost_dice */ 13:
                    message.message = {
                        oneofKind: "costDice",
                        costDice: GCGMsgCostDice_1.GCGMsgCostDice.internalBinaryRead(reader, reader.uint32(), options, message.message.costDice)
                    };
                    break;
                case /* GCGMsgAddDice add_dice */ 7:
                    message.message = {
                        oneofKind: "addDice",
                        addDice: GCGMsgAddDice_1.GCGMsgAddDice.internalBinaryRead(reader, reader.uint32(), options, message.message.addDice)
                    };
                    break;
                case /* GCGMsgMoveCard move_card */ 11:
                    message.message = {
                        oneofKind: "moveCard",
                        moveCard: GCGMsgMoveCard_1.GCGMsgMoveCard.internalBinaryRead(reader, reader.uint32(), options, message.message.moveCard)
                    };
                    break;
                case /* GCGMsgUseSkill use_skill */ 1:
                    message.message = {
                        oneofKind: "useSkill",
                        useSkill: GCGMsgUseSkill_1.GCGMsgUseSkill.internalBinaryRead(reader, reader.uint32(), options, message.message.useSkill)
                    };
                    break;
                case /* GCGMsgNewCard new_card */ 296:
                    message.message = {
                        oneofKind: "newCard",
                        newCard: GCGMsgNewCard_1.GCGMsgNewCard.internalBinaryRead(reader, reader.uint32(), options, message.message.newCard)
                    };
                    break;
                case /* GCGMsgUpdateController update_controller */ 1111:
                    message.message = {
                        oneofKind: "updateController",
                        updateController: GCGMsgUpdateController_1.GCGMsgUpdateController.internalBinaryRead(reader, reader.uint32(), options, message.message.updateController)
                    };
                    break;
                case /* GCGMsgModifyAdd modify_add */ 1733:
                    message.message = {
                        oneofKind: "modifyAdd",
                        modifyAdd: GCGMsgModifyAdd_1.GCGMsgModifyAdd.internalBinaryRead(reader, reader.uint32(), options, message.message.modifyAdd)
                    };
                    break;
                case /* GCGMsgModifyRemove modify_remove */ 2014:
                    message.message = {
                        oneofKind: "modifyRemove",
                        modifyRemove: GCGMsgModifyRemove_1.GCGMsgModifyRemove.internalBinaryRead(reader, reader.uint32(), options, message.message.modifyRemove)
                    };
                    break;
                case /* GCGMsgUseSkillEnd use_skill_end */ 1368:
                    message.message = {
                        oneofKind: "useSkillEnd",
                        useSkillEnd: GCGMsgUseSkillEnd_1.GCGMsgUseSkillEnd.internalBinaryRead(reader, reader.uint32(), options, message.message.useSkillEnd)
                    };
                    break;
                case /* GCGMsgDuelDataChange duel_data_change */ 1791:
                    message.message = {
                        oneofKind: "duelDataChange",
                        duelDataChange: GCGMsgDuelDataChange_1.GCGMsgDuelDataChange.internalBinaryRead(reader, reader.uint32(), options, message.message.duelDataChange)
                    };
                    break;
                case /* GCGMsgClientPerform client_perform */ 1677:
                    message.message = {
                        oneofKind: "clientPerform",
                        clientPerform: GCGMsgClientPerform_1.GCGMsgClientPerform.internalBinaryRead(reader, reader.uint32(), options, message.message.clientPerform)
                    };
                    break;
                case /* GCGMsgGameOver game_over */ 632:
                    message.message = {
                        oneofKind: "gameOver",
                        gameOver: GCGMsgGameOver_1.GCGMsgGameOver.internalBinaryRead(reader, reader.uint32(), options, message.message.gameOver)
                    };
                    break;
                case /* GCGMsgOpTimer op_timer */ 154:
                    message.message = {
                        oneofKind: "opTimer",
                        opTimer: GCGMsgOpTimer_1.GCGMsgOpTimer.internalBinaryRead(reader, reader.uint32(), options, message.message.opTimer)
                    };
                    break;
                case /* GCGMsgWaitingListChange waiting_list_change */ 1991:
                    message.message = {
                        oneofKind: "waitingListChange",
                        waitingListChange: GCGMsgWaitingListChange_1.GCGMsgWaitingListChange.internalBinaryRead(reader, reader.uint32(), options, message.message.waitingListChange)
                    };
                    break;
                case /* GCGMsgCardUpdate card_update */ 1702:
                    message.message = {
                        oneofKind: "cardUpdate",
                        cardUpdate: GCGMsgCardUpdate_1.GCGMsgCardUpdate.internalBinaryRead(reader, reader.uint32(), options, message.message.cardUpdate)
                    };
                    break;
                case /* GCGMsgSelectOnStageByEffect select_on_stage_by_effect */ 1737:
                    message.message = {
                        oneofKind: "selectOnStageByEffect",
                        selectOnStageByEffect: GCGMsgSelectOnStageByEffect_1.GCGMsgSelectOnStageByEffect.internalBinaryRead(reader, reader.uint32(), options, message.message.selectOnStageByEffect)
                    };
                    break;
                case /* GCGMsgCostRevise cost_revise */ 468:
                    message.message = {
                        oneofKind: "costRevise",
                        costRevise: GCGMsgCostRevise_1.GCGMsgCostRevise.internalBinaryRead(reader, reader.uint32(), options, message.message.costRevise)
                    };
                    break;
                case /* GCGMsgPhaseContinue phase_continue */ 1157:
                    message.message = {
                        oneofKind: "phaseContinue",
                        phaseContinue: GCGMsgPhaseContinue_1.GCGMsgPhaseContinue.internalBinaryRead(reader, reader.uint32(), options, message.message.phaseContinue)
                    };
                    break;
                case /* GCGMsgPVEIntentionInfo pve_intention_info */ 850:
                    message.message = {
                        oneofKind: "pveIntentionInfo",
                        pveIntentionInfo: GCGMsgPVEIntentionInfo_1.GCGMsgPVEIntentionInfo.internalBinaryRead(reader, reader.uint32(), options, message.message.pveIntentionInfo)
                    };
                    break;
                case /* GCGMsgPVEIntentionChange pve_intention_change */ 1268:
                    message.message = {
                        oneofKind: "pveIntentionChange",
                        pveIntentionChange: GCGMsgPVEIntentionChange_1.GCGMsgPVEIntentionChange.internalBinaryRead(reader, reader.uint32(), options, message.message.pveIntentionChange)
                    };
                    break;
                case /* GCGMsgSkillLimitsChange skill_limits_change */ 710:
                    message.message = {
                        oneofKind: "skillLimitsChange",
                        skillLimitsChange: GCGMsgSkillLimitsChange_1.GCGMsgSkillLimitsChange.internalBinaryRead(reader, reader.uint32(), options, message.message.skillLimitsChange)
                    };
                    break;
                case /* GCGMsgNoDamageSkillResult no_damage_skill_result */ 773:
                    message.message = {
                        oneofKind: "noDamageSkillResult",
                        noDamageSkillResult: GCGMsgNoDamageSkillResult_1.GCGMsgNoDamageSkillResult.internalBinaryRead(reader, reader.uint32(), options, message.message.noDamageSkillResult)
                    };
                    break;
                case /* GCGMsgReactionBegin reaction_begin */ 243:
                    message.message = {
                        oneofKind: "reactionBegin",
                        reactionBegin: GCGMsgReactionBegin_1.GCGMsgReactionBegin.internalBinaryRead(reader, reader.uint32(), options, message.message.reactionBegin)
                    };
                    break;
                case /* GCGMsgReactionEnd reaction_end */ 1172:
                    message.message = {
                        oneofKind: "reactionEnd",
                        reactionEnd: GCGMsgReactionEnd_1.GCGMsgReactionEnd.internalBinaryRead(reader, reader.uint32(), options, message.message.reactionEnd)
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
        /* GCGMsgTokenChange token_change = 2; */
        if (message.message.oneofKind === "tokenChange")
            GCGMsgTokenChange_1.GCGMsgTokenChange.internalBinaryWrite(message.message.tokenChange, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgPhaseChange phase_change = 10; */
        if (message.message.oneofKind === "phaseChange")
            GCGMsgPhaseChange_1.GCGMsgPhaseChange.internalBinaryWrite(message.message.phaseChange, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgAddCards add_cards = 5; */
        if (message.message.oneofKind === "addCards")
            GCGMsgAddCards_1.GCGMsgAddCards.internalBinaryWrite(message.message.addCards, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgRemoveCards remove_cards = 12; */
        if (message.message.oneofKind === "removeCards")
            GCGMsgRemoveCards_1.GCGMsgRemoveCards.internalBinaryWrite(message.message.removeCards, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgSelectOnStage select_on_stage = 6; */
        if (message.message.oneofKind === "selectOnStage")
            GCGMsgSelectOnStage_1.GCGMsgSelectOnStage.internalBinaryWrite(message.message.selectOnStage, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgDiceRoll dice_roll = 14; */
        if (message.message.oneofKind === "diceRoll")
            GCGMsgDiceRoll_1.GCGMsgDiceRoll.internalBinaryWrite(message.message.diceRoll, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgDiceReroll dice_reroll = 15; */
        if (message.message.oneofKind === "diceReroll")
            GCGMsgDiceReroll_1.GCGMsgDiceReroll.internalBinaryWrite(message.message.diceReroll, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgPass pass = 8; */
        if (message.message.oneofKind === "pass")
            GCGMsgPass_1.GCGMsgPass.internalBinaryWrite(message.message.pass, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgCharDie char_die = 4; */
        if (message.message.oneofKind === "charDie")
            GCGMsgCharDie_1.GCGMsgCharDie.internalBinaryWrite(message.message.charDie, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgSkillResult skill_result = 3; */
        if (message.message.oneofKind === "skillResult")
            GCGMsgSkillResult_1.GCGMsgSkillResult.internalBinaryWrite(message.message.skillResult, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgCostDice cost_dice = 13; */
        if (message.message.oneofKind === "costDice")
            GCGMsgCostDice_1.GCGMsgCostDice.internalBinaryWrite(message.message.costDice, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgAddDice add_dice = 7; */
        if (message.message.oneofKind === "addDice")
            GCGMsgAddDice_1.GCGMsgAddDice.internalBinaryWrite(message.message.addDice, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgMoveCard move_card = 11; */
        if (message.message.oneofKind === "moveCard")
            GCGMsgMoveCard_1.GCGMsgMoveCard.internalBinaryWrite(message.message.moveCard, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgUseSkill use_skill = 1; */
        if (message.message.oneofKind === "useSkill")
            GCGMsgUseSkill_1.GCGMsgUseSkill.internalBinaryWrite(message.message.useSkill, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgNewCard new_card = 296; */
        if (message.message.oneofKind === "newCard")
            GCGMsgNewCard_1.GCGMsgNewCard.internalBinaryWrite(message.message.newCard, writer.tag(296, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgUpdateController update_controller = 1111; */
        if (message.message.oneofKind === "updateController")
            GCGMsgUpdateController_1.GCGMsgUpdateController.internalBinaryWrite(message.message.updateController, writer.tag(1111, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgModifyAdd modify_add = 1733; */
        if (message.message.oneofKind === "modifyAdd")
            GCGMsgModifyAdd_1.GCGMsgModifyAdd.internalBinaryWrite(message.message.modifyAdd, writer.tag(1733, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgModifyRemove modify_remove = 2014; */
        if (message.message.oneofKind === "modifyRemove")
            GCGMsgModifyRemove_1.GCGMsgModifyRemove.internalBinaryWrite(message.message.modifyRemove, writer.tag(2014, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgUseSkillEnd use_skill_end = 1368; */
        if (message.message.oneofKind === "useSkillEnd")
            GCGMsgUseSkillEnd_1.GCGMsgUseSkillEnd.internalBinaryWrite(message.message.useSkillEnd, writer.tag(1368, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgDuelDataChange duel_data_change = 1791; */
        if (message.message.oneofKind === "duelDataChange")
            GCGMsgDuelDataChange_1.GCGMsgDuelDataChange.internalBinaryWrite(message.message.duelDataChange, writer.tag(1791, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgClientPerform client_perform = 1677; */
        if (message.message.oneofKind === "clientPerform")
            GCGMsgClientPerform_1.GCGMsgClientPerform.internalBinaryWrite(message.message.clientPerform, writer.tag(1677, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgGameOver game_over = 632; */
        if (message.message.oneofKind === "gameOver")
            GCGMsgGameOver_1.GCGMsgGameOver.internalBinaryWrite(message.message.gameOver, writer.tag(632, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgOpTimer op_timer = 154; */
        if (message.message.oneofKind === "opTimer")
            GCGMsgOpTimer_1.GCGMsgOpTimer.internalBinaryWrite(message.message.opTimer, writer.tag(154, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgWaitingListChange waiting_list_change = 1991; */
        if (message.message.oneofKind === "waitingListChange")
            GCGMsgWaitingListChange_1.GCGMsgWaitingListChange.internalBinaryWrite(message.message.waitingListChange, writer.tag(1991, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgCardUpdate card_update = 1702; */
        if (message.message.oneofKind === "cardUpdate")
            GCGMsgCardUpdate_1.GCGMsgCardUpdate.internalBinaryWrite(message.message.cardUpdate, writer.tag(1702, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgSelectOnStageByEffect select_on_stage_by_effect = 1737; */
        if (message.message.oneofKind === "selectOnStageByEffect")
            GCGMsgSelectOnStageByEffect_1.GCGMsgSelectOnStageByEffect.internalBinaryWrite(message.message.selectOnStageByEffect, writer.tag(1737, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgCostRevise cost_revise = 468; */
        if (message.message.oneofKind === "costRevise")
            GCGMsgCostRevise_1.GCGMsgCostRevise.internalBinaryWrite(message.message.costRevise, writer.tag(468, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgPhaseContinue phase_continue = 1157; */
        if (message.message.oneofKind === "phaseContinue")
            GCGMsgPhaseContinue_1.GCGMsgPhaseContinue.internalBinaryWrite(message.message.phaseContinue, writer.tag(1157, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgPVEIntentionInfo pve_intention_info = 850; */
        if (message.message.oneofKind === "pveIntentionInfo")
            GCGMsgPVEIntentionInfo_1.GCGMsgPVEIntentionInfo.internalBinaryWrite(message.message.pveIntentionInfo, writer.tag(850, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgPVEIntentionChange pve_intention_change = 1268; */
        if (message.message.oneofKind === "pveIntentionChange")
            GCGMsgPVEIntentionChange_1.GCGMsgPVEIntentionChange.internalBinaryWrite(message.message.pveIntentionChange, writer.tag(1268, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgSkillLimitsChange skill_limits_change = 710; */
        if (message.message.oneofKind === "skillLimitsChange")
            GCGMsgSkillLimitsChange_1.GCGMsgSkillLimitsChange.internalBinaryWrite(message.message.skillLimitsChange, writer.tag(710, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgNoDamageSkillResult no_damage_skill_result = 773; */
        if (message.message.oneofKind === "noDamageSkillResult")
            GCGMsgNoDamageSkillResult_1.GCGMsgNoDamageSkillResult.internalBinaryWrite(message.message.noDamageSkillResult, writer.tag(773, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgReactionBegin reaction_begin = 243; */
        if (message.message.oneofKind === "reactionBegin")
            GCGMsgReactionBegin_1.GCGMsgReactionBegin.internalBinaryWrite(message.message.reactionBegin, writer.tag(243, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* GCGMsgReactionEnd reaction_end = 1172; */
        if (message.message.oneofKind === "reactionEnd")
            GCGMsgReactionEnd_1.GCGMsgReactionEnd.internalBinaryWrite(message.message.reactionEnd, writer.tag(1172, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMessage
 */
exports.GCGMessage = new GCGMessage$Type();
